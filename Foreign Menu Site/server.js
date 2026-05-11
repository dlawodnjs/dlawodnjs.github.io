const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const DATA_FILE = path.join(DATA_DIR, 'menu-data.json');
const SEED_FILE = path.join(ROOT, 'menu-data.js');
const PORT = Number(process.env.PORT || 5000);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  setCorsHeaders(res);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body)
  });
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk;

      if (body.length > 5 * 1024 * 1024) {
        reject(new Error('Request body is too large.'));
        req.destroy();
      }
    });

    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function loadSeedData() {
  const seedCode = fs.readFileSync(SEED_FILE, 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(seedCode, sandbox, { filename: 'menu-data.js' });

  return {
    categories: sandbox.window.menuData?.categories || [],
    menu: sandbox.window.menuData?.menu || {}
  };
}

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(loadSeedData(), null, 2), 'utf8');
  }
}

function readMenuData() {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function validateMenuData(data) {
  if (!data || !Array.isArray(data.categories) || typeof data.menu !== 'object' || Array.isArray(data.menu)) {
    return 'categories 배열과 menu 객체가 필요합니다.';
  }

  for (const category of data.categories) {
    if (!category.id || !category.name || !category.name.ko) {
      return '각 카테고리는 id와 name.ko가 필요합니다.';
    }

    if (!Array.isArray(data.menu[category.id])) {
      data.menu[category.id] = [];
    }
  }

  return null;
}

function writeMenuData(data) {
  const error = validateMenuData(data);

  if (error) {
    const e = new Error(error);
    e.statusCode = 400;
    throw e;
  }

  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

async function handleApi(req, res) {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/menu' && req.method === 'GET') {
    return sendJson(res, 200, readMenuData());
  }

  if (req.url === '/api/menu' && req.method === 'PUT') {
    try {
      const body = await readRequestBody(req);
      const data = JSON.parse(body || '{}');
      writeMenuData(data);
      return sendJson(res, 200, { ok: true, data: readMenuData() });
    } catch (error) {
      return sendJson(res, error.statusCode || 400, {
        ok: false,
        message: error.message
      });
    }
  }

  return sendJson(res, 404, { ok: false, message: 'API route not found.' });
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === '/') pathname = '/index.html';

  const filePath = path.normalize(path.join(ROOT, pathname));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const type = MIME_TYPES[path.extname(filePath)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  });
}

ensureDataFile();

http.createServer((req, res) => {
  if (req.url.startsWith('/api/')) {
    handleApi(req, res);
    return;
  }

  serveStatic(req, res);
}).listen(PORT, () => {
  console.log(`Foreign menu site running at http://localhost:${PORT}`);
});