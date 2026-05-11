/**
 * 다국어 메뉴판 - 메뉴 데이터 모듈
 *
 * - window.menuData 로 노출되어 customer.html / admin.html 두 곳에서 공유.
 * - name / desc 는 { ko, en, ja } 다국어 객체. en/ja 가 비어있어도 OK.
 *   (렌더러가 ko 로 fallback 처리)
 * - 나중에 API/DB 로 옮길 경우 이 파일을 fetch 결과로 대체하면 됨.
 */

// 이미지 URL 이 비어있을 때 쓸 placeholder.
// 카드 레이아웃이 깨지지 않도록 항상 같은 비율로 만들어 준다.
window.MENU_PLACEHOLDER_IMAGE = 'https://picsum.photos/seed/menu-placeholder/400/260';

window.menuData = {
  categories: [
    { id: 'seasonal menu',name: { ko: '계절 메뉴', en: 'seasonal menu', ja: '季節メニュー' } },
    { id: 'dish',   name: { ko: '요리',     en: 'Dishes',    ja: '一品料理' } },
    { id: 'meal',   name: { ko: '식사',     en: 'Noodles & rice dishes',ja: '麺類・ご飯もの' } },
    { id: 'course', name: { ko: '코스 요리', en: 'Set Courses',        ja: 'コース料理' } },
    { id: 'drinks', name: { ko: '주류/음료', en: 'Drinks & Alcohol', ja: '飲み物・お酒' } },
  ],

  menu: {
    // 1) 주류 / 음료
    drinks: [
  {
    id: 'eumryosu',
    name: { ko: '음료수', en: 'Soft Drinks', ja: 'ソフトドリンク' },
    price: '2,000',
    imageUrl: 'https://picsum.photos/seed/drink-soft/400/260',
    desc: {
      ko: '탄산음료 등 무알코올 음료입니다.',
      en: 'Non-alcoholic soft drinks such as sodas.',
      ja: 'コーラなどのノンアルコール飲料です。'
    }
  },
  {
    id: 'soju',
    name: { ko: '소주', en: 'Soju', ja: '焼酎（ソジュ）' },
    price: '5,000',
    imageUrl: 'https://picsum.photos/seed/soju/400/260',
    desc: {
      ko: '한국을 대표하는 증류식 또는 희석식 소주입니다.',
      en: "Korea's iconic distilled spirit, clean and crisp.",
      ja: '韓国を代表する蒸留酒・焼酎です。'
    }
  },
  {
    id: 'beer',
    name: { ko: '맥주', en: 'Beer', ja: 'ビール' },
    price: '5,000',
    imageUrl: 'https://picsum.photos/seed/beer/400/260',
    desc: {
      ko: '시원한 생맥주 또는 병맥주 한 잔.',
      en: 'Cold draft or bottled beer.',
      ja: '冷たい生ビールまたは瓶ビール。'
    }
  },
  {
    id: 'igaoduju',
    name: { ko: '이과두주', en: 'Erguotou', ja: '二鍋頭' },
    price: '6,000',
    imageUrl: 'https://picsum.photos/seed/igaoduju/400/260',
    desc: {
      ko: '중국 북경 지역에서 즐겨 마시는 고도수 백주입니다.',
      en: 'A high-proof Chinese baijiu beloved in Beijing.',
      ja: '北京で愛される高アルコールの中国白酒です。'
    }
  },
  {
    id: 'cheongha',
    name: { ko: '청하', en: 'Cheongha', ja: '清河' },
    price: '6,000',
    imageUrl: 'https://picsum.photos/seed/cheongha/400/260',
    desc: {
      ko: '부드럽고 깔끔한 맛의 청주 스타일 한국 술입니다.',
      en: 'A light and smooth Korean rice wine with a clean finish.',
      ja: 'すっきりとした味わいの韓国清酒スタイルのお酒です。'
    }
  },
  {
    id: 'tsingtao',
    name: { ko: '칭따오맥주', en: 'Tsingtao Beer', ja: '青島ビール' },
    price: '8,000',
    imageUrl: 'https://picsum.photos/seed/tsingtao/400/260',
    desc: {
      ko: '중국 대표 라거 맥주 칭따오 병맥주입니다.',
      en: "China's iconic lager, served in a bottle.",
      ja: '中国を代表するラガービール、青島ビールの瓶です。'
    }
  },
  {
    id: 'goryangju',
    name: { ko: '고량주', en: 'Baijiu', ja: '高粱酒' },
    price: '8,000',
    imageUrl: 'https://picsum.photos/seed/goryangju/400/260',
    desc: {
      ko: '고량을 발효해 만든 향이 진한 중국식 백주입니다.',
      en: 'Aromatic Chinese spirit distilled from sorghum.',
      ja: 'コーリャンから作られた香り豊かな中国白酒です。'
    }
  },
  {
    id: 'gongbu-jayak',
    name: { ko: '공부자약', en: 'Confucius Family Liquor', ja: '孔府家酒' },
    price: '80,000',
    imageUrl: 'https://picsum.photos/seed/gongbujayak/400/260',
    desc: {
      ko: '풍부한 향과 깊은 맛이 특징인 프리미엄 고량주입니다.',
      en: 'Premium baijiu with a rich aroma and complex depth.',
      ja: '豊かな香りと深い味わいが特徴のプレミアム白酒です。'
    }
  },
  {
    id: 'ddidi',
    name: { ko: '띠디(弟弟)', en: 'Didi Baijiu', ja: '弟弟白酒' },
    price: '80,000',
    imageUrl: 'https://picsum.photos/seed/ddidi/400/260',
    desc: {
      ko: '깔끔한 피니시가 특징인 중국 고량주 브랜드입니다.',
      en: 'A Chinese baijiu known for its clean, smooth finish.',
      ja: 'すっきりとしたキレが特徴の中国白酒ブランドです。'
    }
  },
  {
    id: 'yeontae-black',
    name: { ko: '연태블랙', en: 'Yantai Black', ja: '煙台ブラック' },
    price: '55,000',
    imageUrl: 'https://picsum.photos/seed/yeontaeblack/400/260',
    desc: {
      ko: '풍부한 향과 부드러운 목넘김의 연태 블랙 라벨 고량주입니다.',
      en: 'Yantai Black Label baijiu — rich aroma, silky smooth.',
      ja: '豊かな香りとなめらかな口当たりの煙台ブラックラベル白酒です。'
    }
  },
  {
    id: 'yeontae-so',
    name: { ko: '연태고량주 (소)', en: 'Yantai Baijiu (S)', ja: '煙台高粱酒（小）' },
    price: '12,000',
    imageUrl: 'https://picsum.photos/seed/yeontaeso/400/260',
    desc: {
      ko: '연태고량주 소 사이즈 병입니다.',
      en: 'Yantai-style baijiu, small bottle.',
      ja: '煙台高粱酒の小瓶です。'
    }
  },
  {
    id: 'yeontae-jung',
    name: { ko: '연태고량주 (중)', en: 'Yantai Baijiu (M)', ja: '煙台高粱酒（中）' },
    price: '22,000',
    imageUrl: 'https://picsum.photos/seed/yeontaejung/400/260',
    desc: {
      ko: '연태고량주 중간 사이즈 병입니다.',
      en: 'Yantai-style baijiu, medium bottle.',
      ja: '煙台高粱酒の中瓶です。'
    }
  },
  {
    id: 'yeontae-dae',
    name: { ko: '연태고량주 (대)', en: 'Yantai Baijiu (L)', ja: '煙台高粱酒（大）' },
    price: '41,000',
    imageUrl: 'https://picsum.photos/seed/yeontaedae/400/260',
    desc: {
      ko: '연태고량주 대병으로 여럿이 함께 즐기기 좋습니다.',
      en: 'Yantai-style baijiu, large bottle — great for sharing.',
      ja: '煙台高粱酒の大瓶。みんなでシェアするのにぴったりです。'
    }
  },
  {
    id: 'gongbugaju-jung',
    name: { ko: '공부가주 (중)', en: 'Gongbuga Baijiu (M)', ja: '孔府家酒（中）' },
    price: '23,000',
    imageUrl: 'https://picsum.photos/seed/gongbugaju1/400/260',
    desc: {
      ko: '중간 용량의 공부가주로 부담 없이 즐기기 좋습니다.',
      en: 'Gongbuga-style baijiu, medium bottle — easy to enjoy.',
      ja: '気軽に楽しめる孔府家酒の中瓶です。'
    }
  },
  {
    id: 'gongbugaju-dae',
    name: { ko: '공부가주 (대)', en: 'Gongbuga Baijiu (L)', ja: '孔府家酒（大）' },
    price: '42,000',
    imageUrl: 'https://picsum.photos/seed/gongbugaju2/400/260',
    desc: {
      ko: '대병 공부가주로 단체 모임에 어울립니다.',
      en: 'Gongbuga-style baijiu, large bottle — perfect for groups.',
      ja: '大人数の席にぴったりな孔府家酒の大瓶です。'
    }
  },
  {
    id: 'yanghadaegok-jung',
    name: { ko: '양하대곡 (중)', en: 'Yanghe Daqu (M)', ja: '洋河大曲（中）' },
    price: '45,000',
    imageUrl: 'https://picsum.photos/seed/yangha1/400/260',
    desc: {
      ko: '향이 부드러운 양하대곡 중간 용량 제품입니다.',
      en: 'Yanghe Daqu baijiu, medium bottle — mellow and aromatic.',
      ja: 'まろやかな香りの洋河大曲、中瓶です。'
    }
  },
  {
    id: 'yanghadaegok-dae',
    name: { ko: '양하대곡 (대)', en: 'Yanghe Daqu (L)', ja: '洋河大曲（大）' },
    price: '60,000',
    imageUrl: 'https://picsum.photos/seed/yangha2/400/260',
    desc: {
      ko: '풍부한 향의 양하대곡 대병입니다.',
      en: 'Yanghe Daqu baijiu, large bottle — fragrant and full-bodied.',
      ja: '香り豊かな洋河大曲の大瓶です。'
    }
  },
  {
    id: 'gyeongju-dae',
    name: { ko: '경주 (대)', en: 'Gyeongju Baijiu (L)', ja: '慶州酒（大）' },
    price: '60,000',
    imageUrl: 'https://picsum.photos/seed/gyeongju/400/260',
    desc: {
      ko: '풍미가 깊은 경주 브랜드의 대병 고량주입니다.',
      en: 'Gyeongju-brand baijiu, large bottle — bold and flavorful.',
      ja: '深い風味の慶州ブランド白酒の大瓶です。'
    }
  },
  {
    id: 'jukyeopcheongju-dae',
    name: { ko: '죽엽청주 (대)', en: 'Zhuyeqing (L)', ja: '竹葉青酒（大）' },
    price: '70,000',
    imageUrl: 'https://picsum.photos/seed/jukyeop/400/260',
    desc: {
      ko: '죽엽 향을 입힌 전통 청주 스타일의 술입니다.',
      en: 'A traditional Chinese liqueur infused with bamboo leaves.',
      ja: '竹の葉を漬け込んだ伝統的な中国薬味酒です。'
    }
  },
  {
    id: 'geumhwa-jung',
    name: { ko: '금화천진 (중)', en: 'Jinhua Tianjin (M)', ja: '金華天津酒（中）' },
    price: '40,000',
    imageUrl: 'https://picsum.photos/seed/geumhwa1/400/260',
    desc: {
      ko: '은은한 향의 금화천진 중간 용량 제품입니다.',
      en: 'Jinhua Tianjin baijiu, medium bottle — subtle and fragrant.',
      ja: 'ほのかな香りの金華天津酒の中瓶です。'
    }
  },
  {
    id: 'geumhwa-dae',
    name: { ko: '금화천진 (대)', en: 'Jinhua Tianjin (L)', ja: '金華天津酒（大）' },
    price: '60,000',
    imageUrl: 'https://picsum.photos/seed/geumhwa2/400/260',
    desc: {
      ko: '단체 모임에 적합한 금화천진 대병입니다.',
      en: 'Jinhua Tianjin baijiu, large bottle — ideal for groups.',
      ja: '宴会にぴったりな金華天津酒の大瓶です。'
    }
  },
  {
    id: 'geummun-jung',
    name: { ko: '금문고량주 (중)', en: 'Kinmen Kaoliang (M)', ja: '金門高粱酒（中）' },
    price: '80,000',
    imageUrl: 'https://picsum.photos/seed/geummun1/400/260',
    desc: {
      ko: '대만산 금문고량주 중간 용량으로 향이 매우 진합니다.',
      en: 'Taiwanese Kinmen Kaoliang, medium bottle — bold and intensely aromatic.',
      ja: '台湾産の金門高粱酒、中瓶。非常に香り高い一本です。'
    }
  },
  {
    id: 'geummun-dae',
    name: { ko: '금문고량주 (대)', en: 'Kinmen Kaoliang (L)', ja: '金門高粱酒（大）' },
    price: '150,000',
    imageUrl: 'https://picsum.photos/seed/geummun2/400/260',
    desc: {
      ko: '프리미엄 금문고량주 대병으로 특별한 자리에 추천합니다.',
      en: 'Premium Kinmen Kaoliang, large bottle — reserved for special occasions.',
      ja: 'プレミアム金門高粱酒の大瓶。特別な席におすすめです。'
    }
  },

  {
  id: 'corkage',
  name: { ko: '콜키지 (병당)', en: 'Corkage (per bottle)', ja: 'コルケージ料（1本）' },
  price: '20,000',
  imageUrl: window.MENU_PLACEHOLDER_IMAGE,
  desc: {
    ko: '와인 및 주류 반입 시 병당 콜키지 요금입니다.',
    en: 'Corkage fee per bottle for bring-your-own wine or spirits.',
    ja: '持ち込みワイン・お酒1本につきのコルケージ料です。'
  }
}]
,

    // 2) 코스 요리
    course: [
  {
    id: 'course-a',
    name: { ko: 'A코스', en: 'Course A', ja: 'Aコース' },
    price: '32,000',
    imageUrl: 'https://picsum.photos/seed/courseA/400/260',
    desc: {
      ko: '오향장육, 계살 단호박 스프, 유산슬, 칠리새우, 탕수육, 식사, 디저트 (1인).',
      en: 'Five-spice sliced pork, chicken & pumpkin soup, yusanseul (stir-fried seafood and vegetables), chili shrimp, sweet and sour pork, rice or noodles, and dessert (per person).',
      ja: '五香チャーシュー、鶏肉とかぼちゃのスープ、ユサンスル（海鮮と野菜のとろみ炒め）、チリエビ、酢豚、ご飯または麺、デザートの１人用コースです。'
    }
  },
  {
    id: 'course-b',
    name: { ko: 'B코스', en: 'Course B', ja: 'Bコース' },
    price: '40,000',
    imageUrl: 'https://picsum.photos/seed/courseB/400/260',
    desc: {
      ko: '양장피, 해물누룽지탕, 향라두치새우, 유림기, 흑후추 안심, 꽃빵, 식사, 디저트 (1인).',
      en: 'Yangjangpi cold platter, seafood sizzling rice soup, spicy stir-fried shrimp, yuringi fried chicken, black pepper beef tenderloin, steamed buns, main dish, and dessert (per person).',
      ja: 'ヤンジャンピ冷菜、海鮮おこげスープ、ピリ辛エビ炒め、油淋鶏、黒胡椒牛ヒレ炒め、花巻、ご飯または麺、デザートの１人用コースです。'
    }
  },
  {
    id: 'course-c',
    name: { ko: 'C코스', en: 'Course C', ja: 'Cコース' },
    price: '52,000',
    imageUrl: 'https://picsum.photos/seed/courseC/400/260',
    desc: {
      ko: '냉채, 전가복, 깐풍새우, 어향생선, 동파육, 꽃빵, 식사, 디저트 (1인).',
      en: 'Assorted cold appetizer, jeongabok deluxe seafood and meat, spicy fried shrimp, fish in garlic sauce, Dongpo pork (braised pork belly), buns, main dish, and dessert (per person).',
      ja: '前菜盛り合わせ、ジョンガボク（海鮮と肉の豪華炒め）、ピリ辛エビ揚げ、魚のガーリックソース、東坡肉（豚バラ煮込み）、花巻、ご飯または麺、デザートの１人用コースです。'
    }
  },
  {
    id: 'course-d',
    name: { ko: 'D코스', en: 'Course D', ja: 'Dコース' },
    price: '68,000',
    imageUrl: 'https://picsum.photos/seed/courseD/400/260',
    desc: {
      ko: '냉채, 계살단호박 산슬어초, 일품 해삼, 굴소스 통전복, 크림새우, 어향삼겹살, 꽃빵, 식사, 디저트 (1인).',
      en: 'Cold appetizer, chicken & pumpkin yusanseul, premium sea cucumber dish, whole abalone in oyster sauce, cream shrimp, pork belly in garlic sauce, buns, main dish, and dessert (per person).',
      ja: '前菜盛り合わせ、鶏肉とかぼちゃのユサンスル、特製ナマコ料理、丸ごとアワビのオイスターソース、クリームエビ、豚バラのガーリックソース炒め、花巻、ご飯または麺、デザートの１人用コースです。'
    }
  }
],

    // 3) 중새우 및 고기 요리
    dish: [
      {
        id: 'yangjangpi',
        name: { ko: '양장피', en: 'Yangjangpi cold platter', ja: 'ヤンジャンピ冷菜' },
        price: '38,000',
        imageUrl: 'https://picsum.photos/seed/yangjangpi/400/260',
        desc: {
          ko: '해산물과 채소, 당면을 넣어 먹는 매콤한 겨자 소스 냉채입니다.',
          en: 'A cold platter of seafood, vegetables, and glass noodles with spicy mustard sauce.',
          ja: ''
        }
      },
      {
        id: 'ohhyang-jangyuk',
        name: { ko: '오향장육', en: 'Five-spice sliced pork', ja: '五香チャーシュー' },
        price: '38,000',
        imageUrl: 'https://picsum.photos/seed/ohhyang/400/260',
        desc: {
          ko: '다섯 가지 향신료로 삶아낸 돼지고기를 얇게 썰어낸 냉채 요리입니다.',
          en: 'Chilled sliced pork simmered with Chinese five-spice and served cold.',
          ja: ''
        }
      },
      {
        id: 'haepari-naengchae',
        name: { ko: '해파리냉채', en: 'Jellyfish salad', ja: 'クラゲ冷菜' },
        price: '28,000',
        imageUrl: 'https://picsum.photos/seed/haepari/400/260',
        desc: {
          ko: '오이와 해파리를 새콤하게 무친 중국식 냉채입니다.',
          en: 'A refreshing cold salad of jellyfish and cucumber in a tangy sauce.',
          ja: ''
        }
      },
      {
        id: 'sampum-naengchae',
        name: { ko: '삼품냉채', en: 'Three-kind cold appetizer', ja: '三品冷菜盛り合わせ' },
        price: '40,000',
        imageUrl: 'https://picsum.photos/seed/sampum/400/260',
        desc: {
          ko: '세 가지 냉채를 한 번에 맛볼 수 있는 모둠 냉채입니다.',
          en: 'Assorted plate of three different Chinese-style cold appetizers.',
          ja: ''
        }
      },
      {
        id: 'yusanseul',
        name: { ko: '유산슬', en: 'Yusanseul (seafood & vegetables)', ja: '海鮮と野菜のとろみ炒め（ユサンスル）' },
        price: '40,000',
        imageUrl: 'https://picsum.photos/seed/yusanseul/400/260',
        desc: {
          ko: '해산물과 채소, 고기를 걸쭉한 소스로 볶아낸 대표 중화요리입니다.',
          en: 'Stir-fried seafood, meat, and vegetables in a thick savory sauce.',
          ja: ''
        }
      },
      {
        id: 'palbochae',
        name: { ko: '팔보채', en: 'Palbochae (eight-treasure stir-fry)', ja: '八宝菜' },
        price: '40,000',
        imageUrl: 'https://picsum.photos/seed/palbochae/400/260',
        desc: {
          ko: '여러 가지 해산물과 채소를 함께 볶아낸 팔보채입니다.',
          en: 'Classic stir-fry of assorted seafood, meat, and vegetables.',
          ja: ''
        }
      },
      {
        id: 'samseon-nurungjitang',
        name: { ko: '삼선누룽지탕', en: 'Seafood sizzling rice soup', ja: '三鮮おこげスープ' },
        price: '45,000',
        imageUrl: 'https://picsum.photos/seed/nurungji/400/260',
        desc: {
          ko: '바삭한 누룽지에 해산물 소스를 부어 먹는 탕 요리입니다.',
          en: 'Crispy scorched rice served with hot seafood sauce poured over.',
          ja: ''
        }
      },
      {
        id: 'gye-sal-eocho-bokkeum',
        name: { ko: '계살어초볶음', en: 'Chicken & fish in sweet vinegar sauce', ja: '鶏肉と魚の甘酢炒め' },
        price: '60,000',
        imageUrl: 'https://picsum.photos/seed/geysal/400/260',
        desc: {
          ko: '닭고기와 생선을 새콤달콤한 어초 소스로 볶은 요리입니다.',
          en: 'Stir-fried chicken and fish in a sweet and sour vinegar sauce.',
          ja: ''
        }
      },
      {
        id: 'bukgyeong-eocho',
        name: { ko: '북경어초', en: 'Beijing-style sweet vinegar fish', ja: '北京式魚甘酢' },
        price: '60,000',
        imageUrl: 'https://picsum.photos/seed/bukgyeong/400/260',
        desc: {
          ko: '통생선을 바삭하게 튀겨 새콤달콤한 소스를 끼얹은 요리입니다.',
          en: 'Whole fried fish topped with a sweet and sour Beijing-style sauce.',
          ja: ''
        }
      },
      {
        id: 'jeongabok',
        name: { ko: '전가복', en: 'Jeongabok deluxe seafood & meat', ja: '海鮮と肉の豪華煮込み（チョンガボク）' },
        price: '70,000',
        imageUrl: 'https://picsum.photos/seed/jeongabok/400/260',
        desc: {
          ko: '전복, 해삼 등 고급 재료를 넣어 푹 끓인 진한 소스 요리입니다.',
          en: 'A rich braised dish with abalone, sea cucumber, and assorted meats.',
          ja: ''
        }
      },
      {
        id: 'jungsaeu-jung',
        name: { ko: '중새우 요리 (칠리/깐풍/크림) 중', en: 'Prawn dish (chili/kkanpung/cream, medium)', ja: '中エビ料理（チリ/カンプン/クリーム・中）' },
        price: '30,000',
        imageUrl: 'https://picsum.photos/seed/jungsaeu1/400/260',
        desc: {
          ko: '중새우를 칠리, 깐풍, 크림 중에서 선택해 즐기는 중간 사이즈 요리입니다.',
          en: 'Medium portion prawn dish with your choice of chili, spicy garlic, or cream sauce.',
          ja: ''
        }
      },
      {
        id: 'jungsaeu-dae',
        name: { ko: '중새우 요리 (칠리/깐풍/크림) 대', en: 'Prawn dish (chili/kkanpung/cream, large)', ja: '中エビ料理（チリ/カンプン/クリーム・大）' },
        price: '40,000',
        imageUrl: 'https://picsum.photos/seed/jungsaeu2/400/260',
        desc: {
          ko: '중새우를 다양한 소스로 즐길 수 있는 대(大) 사이즈 메뉴입니다.',
          en: 'Large portion prawn dish with a choice of chili, spicy garlic, or cream sauce.',
          ja: ''
        }
      },
      {
        id: 'hyangra-saeu',
        name: { ko: '향라두치새우', en: 'Spicy stir-fried shrimp', ja: '香辣海老炒め' },
        price: '40,000',
        imageUrl: 'https://picsum.photos/seed/hyangrasaeu/400/260',
        desc: {
          ko: '매콤한 향라 소스로 볶아낸 새우 요리입니다.',
          en: 'Shrimp stir-fried in a spicy, aromatic chili sauce.',
          ja: ''
        }
      },
      {
        id: 'yuringi',
        name: { ko: '유림기', en: 'Yuringi soy sauce fried chicken', ja: '油淋鶏（ユーリンチー）' },
        price: '30,000',
        imageUrl: 'https://picsum.photos/seed/yuringi/400/260',
        desc: {
          ko: '바삭하게 튀긴 닭고기에 간장 소스를 끼얹은 대표 요리입니다.',
          en: 'Crispy fried chicken topped with a savory soy-based sauce.',
          ja: ''
        }
      },
      {
        id: 'kanpunggi',
        name: { ko: '깐풍기', en: 'Kkanpunggi (spicy garlic fried chicken)', ja: 'カンプンギ（鶏の辛味揚げ）' },
        price: '30,000',
        imageUrl: 'https://picsum.photos/seed/kanpunggi/400/260',
        desc: {
          ko: '고추와 마늘을 넣어 매콤하게 볶아낸 닭튀김 요리입니다.',
          en: 'Fried chicken tossed with chili peppers and garlic in a spicy sauce.',
          ja: ''
        }
      },
      {
        id: 'hyangra-chicken',
        name: { ko: '향라두치치킨', en: 'Spicy stir-fried chicken', ja: '香辣鶏炒め' },
        price: '30,000',
        imageUrl: 'https://picsum.photos/seed/hyangrachicken/400/260',
        desc: {
          ko: '향라 스타일의 매콤한 소스로 볶아낸 치킨 요리입니다.',
          en: 'Chicken stir-fried in a spicy aromatic chili sauce.',
          ja: ''
        }
      },
      {
        id: 'mongolian-tenderloin',
        name: { ko: '몽골리안 안심', en: 'Mongolian beef tenderloin', ja: 'モンゴリアン牛ヒレ炒め' },
        price: '30,000',
        imageUrl: 'https://picsum.photos/seed/mongolian/400/260',
        desc: {
          ko: '달콤짭짤한 소스로 볶아낸 몽골리안 스타일 소고기 안심입니다.',
          en: 'Beef tenderloin stir-fried in a sweet and savory Mongolian-style sauce.',
          ja: ''
        }
      },
      {
        id: 'blackpepper-tenderloin',
        name: { ko: '흑후추 안심', en: 'Black pepper beef tenderloin', ja: '黒胡椒牛ヒレ炒め' },
        price: '30,000',
        imageUrl: 'https://picsum.photos/seed/blackpepper/400/260',
        desc: {
          ko: '진한 흑후추 소스로 볶아낸 소고기 안심 요리입니다.',
          en: 'Beef tenderloin stir-fried with a rich black pepper sauce.',
          ja: ''
        }
      },
      {
        id: 'tangsuyuk-jung',
        name: { ko: '탕수육 (중)', en: 'Sweet and sour pork (medium)', ja: '酢豚（中）' },
        price: '21,000',
        imageUrl: 'https://picsum.photos/seed/tangsuyuk1/400/260',
        desc: {
          ko: '겉은 바삭하고 속은 촉촉한 탕수육 중간 사이즈입니다.',
          en: 'Medium portion of classic sweet and sour pork with crispy batter.',
          ja: ''
        }
      },
      {
        id: 'tangsuyuk-dae',
        name: { ko: '탕수육 (대)', en: 'Sweet and sour pork (large)', ja: '酢豚（大）' },
        price: '28,000',
        imageUrl: 'https://picsum.photos/seed/tangsuyuk2/400/260',
        desc: {
          ko: '여럿이 나누어 먹기 좋은 탕수육 대(大) 사이즈입니다.',
          en: 'Large portion of sweet and sour pork for sharing.',
          ja: ''
        }
      },
      {
        id: 'beijing-tangsuyuk-jung',
        name: { ko: '북경탕수육 (중)', en: 'Beijing-style sweet and sour pork (medium)', ja: '北京式酢豚（中）' },
        price: '23,000',
        imageUrl: 'https://picsum.photos/seed/beijing1/400/260',
        desc: {
          ko: '소스를 부어 먹는 스타일의 북경식 탕수육 중간 사이즈입니다.',
          en: 'Medium portion of Beijing-style sweet and sour pork with sauce poured over.',
          ja: ''
        }
      },
      {
        id: 'beijing-tangsuyuk-dae',
        name: { ko: '북경탕수육 (대)', en: 'Beijing-style sweet and sour pork (large)', ja: '北京式酢豚（大）' },
        price: '31,000',
        imageUrl: 'https://picsum.photos/seed/beijing2/400/260',
        desc: {
          ko: '넉넉한 양의 북경식 탕수육 대(大) 사이즈입니다.',
          en: 'Large portion of Beijing-style sweet and sour pork for groups.',
          ja: ''
        }
      },
      {
        id: 'sichuan-tangsuyuk-jung',
        name: { ko: '사천탕수육 (중)', en: 'Sichuan spicy sweet and sour pork (medium)', ja: '四川風辛口酢豚（中）' },
        price: '26,000',
        imageUrl: 'https://picsum.photos/seed/sichuan1/400/260',
        desc: {
          ko: '매콤한 고추기름과 향신료를 더한 사천식 탕수육입니다.',
          en: 'Medium portion of Sichuan-style sweet and sour pork with spicy chili oil.',
          ja: ''
        }
      },
      {
        id: 'sichuan-tangsuyuk-dae',
        name: { ko: '사천탕수육 (대)', en: 'Sichuan spicy sweet and sour pork (large)', ja: '四川風辛口酢豚（大）' },
        price: '33,000',
        imageUrl: 'https://picsum.photos/seed/sichuan2/400/260',
        desc: {
          ko: '얼큰한 맛이 특징인 사천식 탕수육 대 사이즈입니다.',
          en: 'Large portion of spicy Sichuan-style sweet and sour pork.',
          ja: ''
        }
      },
      {
        id: 'tangsufish',
        name: { ko: '탕수생선', en: 'Sweet and sour fish', ja: '酢魚' },
        price: '32,000',
        imageUrl: 'https://picsum.photos/seed/tangsufish/400/260',
        desc: {
          ko: '생선을 바삭하게 튀겨 새콤달콤한 소스를 곁들였습니다.',
          en: 'Crispy fried fish served with sweet and sour sauce.',
          ja: ''
        }
      },
      {
        id: 'gochujapchae',
        name: { ko: '고추잡채', en: 'Spicy shredded pork with peppers', ja: 'ピーマン細切り豚肉炒め（ゴチュジャプチェ）' },
        price: '32,000',
        imageUrl: 'https://picsum.photos/seed/gochujapchae/400/260',
        desc: {
          ko: '얇게 썬 돼지고기와 피망을 매콤하게 볶아 꽃빵과 함께 먹는 요리입니다.',
          en: 'Thinly sliced pork stir-fried with peppers, usually served with steamed buns.',
          ja: ''
        }
      },
      {
        id: 'mapodubu',
        name: { ko: '마파두부', en: 'Mapo tofu', ja: '麻婆豆腐' },
        price: '22,000',
        imageUrl: 'https://picsum.photos/seed/mapodubu/400/260',
        desc: {
          ko: '두부와 다진 고기를 매콤한 소스로 볶아낸 인기 메뉴입니다.',
          en: 'Soft tofu and minced meat in a spicy, numbing Sichuan-style sauce.',
          ja: ''
        }
      },
      {
        id: 'gongbo-gejeong',
        name: { ko: '공보계정', en: 'Kung Pao chicken', ja: '宮保鶏丁（クンポウチキン）' },
        price: '30,000',
        imageUrl: 'https://picsum.photos/seed/gongbo/400/260',
        desc: {
          ko: '닭고기와 땅콩, 고추를 함께 볶은 매콤달콤한 궁보계 스타일 요리입니다.',
          en: 'Stir-fried chicken with peanuts and chili peppers in a sweet-spicy sauce.',
          ja: ''
        }
      },
      {
        id: 'dongpayuk',
        name: { ko: '동파육', en: 'Dongpo braised pork belly', ja: '東坡肉' },
        price: '38,000',
        imageUrl: 'https://picsum.photos/seed/dongpayuk/400/260',
        desc: {
          ko: '두껍게 썬 삼겹살을 간장 양념에 오래 끓여낸 대표 중화요리입니다.',
          en: 'Thick pork belly slowly braised in a rich soy-based sauce.',
          ja: ''
        }
      },
      {
        id: 'sanlatang',
        name: { ko: '산라탕', en: 'Hot and sour soup', ja: 'サンラータン（酸辣湯）' },
        price: '25,000',
        imageUrl: 'https://picsum.photos/seed/sanlatang/400/260',
        desc: {
          ko: '식초와 후추 향이 어우러진 매콤새콤한 중국식 탕입니다.',
          en: 'Chinese-style soup with a spicy and sour flavor from vinegar and pepper.',
          ja: ''
        }
      },
      {
        id: 'corn-soup',
        name: { ko: '계살옥수수스프', en: 'Chicken & corn soup', ja: '鶏肉コーンスープ' },
        price: '28,000',
        imageUrl: 'https://picsum.photos/seed/cornsoup/400/260',
        desc: {
          ko: '옥수수와 닭고기를 넣어 부드럽게 끓인 스프입니다.',
          en: 'A mild, creamy soup with sweet corn and chicken.',
          ja: ''
        }
      },
      {
        id: 'samseon-tang',
        name: { ko: '삼선탕', en: 'Seafood soup', ja: '三鮮スープ' },
        price: '22,000',
        imageUrl: 'https://picsum.photos/seed/samseontang/400/260',
        desc: {
          ko: '해산물을 듬뿍 넣어 끓인 맑은 스타일의 중국식 탕입니다.',
          en: 'Clear Chinese-style soup with assorted seafood.',
          ja: ''
        }
      }
    ],

    // 4) 면·밥류
    meal: [
      {
        id: 'yuni-jjajang',
        name: { ko: '유니자장면', en: 'Ground pork black bean noodles', ja: 'ユニジャージャー麺' },
        price: '7,000',
        imageUrl: 'https://picsum.photos/seed/yuni/400/260',
        desc: {
          ko: '잘게 간 고기를 넣은 부드러운 자장 소스의 면 요리입니다.',
          en: 'Noodles in black bean sauce with finely ground pork.',
          ja: ''
        }
      },
      {
        id: 'jjambbong',
        name: { ko: '짬뽕', en: 'Spicy seafood noodle soup', ja: 'チャンポン' },
        price: '8,000',
        imageUrl: 'https://picsum.photos/seed/jjambbong/400/260',
        desc: {
          ko: '얼큰한 해산물 육수가 특징인 대표 짬뽕입니다.',
          en: 'Noodles in a spicy seafood broth with vegetables.',
          ja: ''
        }
      },
      {
        id: 'gochu-jjambbong',
        name: { ko: '고추짬뽕', en: 'Extra spicy jjambbong', ja: '唐辛子チャンポン' },
        price: '9,000',
        imageUrl: 'https://picsum.photos/seed/gochujjam/400/260',
        desc: {
          ko: '고추를 더해 더욱 매콤하게 즐기는 짬뽕입니다.',
          en: 'Jjambbong made extra spicy with added chili peppers.',
          ja: ''
        }
      },
      {
        id: 'samseon-jjambbong',
        name: { ko: '삼선짬뽕', en: 'Deluxe seafood jjambbong', ja: '三鮮チャンポン' },
        price: '10,000',
        imageUrl: 'https://picsum.photos/seed/samseonjjambbong/400/260',
        desc: {
          ko: '해산물을 듬뿍 넣은 풍성한 삼선짬뽕입니다.',
          en: 'Deluxe spicy noodle soup loaded with assorted seafood.',
          ja: ''
        }
      },
      {
        id: 'yuksong-jjambbong',
        name: { ko: '육슬짬뽕', en: 'Beef jjambbong', ja: '牛肉チャンポン' },
        price: '10,000',
        imageUrl: 'https://picsum.photos/seed/yuksong/400/260',
        desc: {
          ko: '소고기를 넣어 진한 맛을 더한 짬뽕입니다.',
          en: 'Spicy noodle soup made with beef and vegetables.',
          ja: ''
        }
      },
      {
        id: 'samseon-jjajang',
        name: { ko: '삼선자장', en: 'Deluxe seafood black bean noodles', ja: '三鮮ジャージャー麺' },
        price: '10,000',
        imageUrl: 'https://picsum.photos/seed/samseonjja/400/260',
        desc: {
          ko: '해산물이 들어간 풍성한 자장면입니다.',
          en: 'Black bean noodles topped with assorted seafood.',
          ja: ''
        }
      },
      {
        id: 'sacheon-tangmyeon',
        name: { ko: '사천탕면', en: 'Sichuan-style spicy noodle soup', ja: '四川風タンメン' },
        price: '10,000',
        imageUrl: 'https://picsum.photos/seed/sacheonmyeon/400/260',
        desc: {
          ko: '사천식 매운 육수로 끓인 얼큰한 면 요리입니다.',
          en: 'Noodles served in a spicy Sichuan-style broth.',
          ja: ''
        }
      },
      {
        id: 'samseon-udon',
        name: { ko: '삼선우동', en: 'Deluxe seafood udon', ja: '三鮮うどん' },
        price: '10,000',
        imageUrl: 'https://picsum.photos/seed/samseonudon/400/260',
        desc: {
          ko: '굵은 우동 면에 해산물을 얹은 따뜻한 국물요리입니다.',
          en: 'Thick udon noodles in soup topped with assorted seafood.',
          ja: ''
        }
      },
      {
        id: 'sin-ramyeon',
        name: { ko: '신락면', en: 'Shin Ramyun', ja: '辛ラーメン' },
        price: '11,000',
        imageUrl: 'https://picsum.photos/seed/sinramyeon/400/260',
        desc: {
          ko: '',
          en: '',
          ja: ''
        }
      },
      {
        id: 'samseon-jjamban-jjajang',
        name: { ko: '삼선쟁반자장', en: 'Seafood platter black bean noodles', ja: '三鮮大皿ジャージャー麺' },
        price: '21,000',
        imageUrl: 'https://picsum.photos/seed/jjamban/400/260',
        desc: {
          ko: '쟁반에 담아 여럿이 나눠 먹는 해물 자장면입니다.',
          en: 'Large platter of black bean noodles with seafood for sharing.',
          ja: ''
        }
      },
      {
        id: 'pork-fried-rice',
        name: { ko: '돼지고기볶음밥', en: 'Pork fried rice', ja: '豚肉チャーハン' },
        price: '8,000',
        imageUrl: 'https://picsum.photos/seed/porkrice/400/260',
        desc: {
          ko: '돼지고기와 채소를 넣어 고슬고슬하게 볶은 볶음밥입니다.',
          en: 'Fried rice with pork and vegetables.',
          ja: ''
        }
      },
      {
        id: 'shrimp-fried-rice',
        name: { ko: '새우볶음밥', en: 'Shrimp fried rice', ja: '海老チャーハン' },
        price: '10,000',
        imageUrl: 'https://picsum.photos/seed/shrimprice/400/260',
        desc: {
          ko: '탱글한 새우가 들어간 기본 볶음밥 메뉴입니다.',
          en: 'Fried rice with plump shrimp and vegetables.',
          ja: ''
        }
      },
      {
        id: 'chicken-fried-rice',
        name: { ko: '계살볶음밥', en: 'Chicken fried rice', ja: '鶏肉チャーハン' },
        price: '11,000',
        imageUrl: 'https://picsum.photos/seed/chickenrice/400/260',
        desc: {
          ko: '닭고기를 듬뿍 넣어 볶아낸 볶음밥입니다.',
          en: 'Fried rice generously topped with chicken pieces.',
          ja: ''
        }
      },
      {
        id: 'gochujapchae-rice',
        name: { ko: '고추잡채밥', en: 'Rice with spicy shredded pork & peppers', ja: 'ゴチュジャプチェ丼' },
        price: '12,000',
        imageUrl: 'https://picsum.photos/seed/gochujapchaerice/400/260',
        desc: {
          ko: '고추잡채를 밥 위에 올려 비벼 먹는 덮밥 스타일입니다.',
          en: 'Rice bowl topped with spicy shredded pork and peppers.',
          ja: ''
        }
      },
      {
        id: 'mapodubu-rice',
        name: { ko: '마파두부밥', en: 'Mapo tofu rice', ja: '麻婆豆腐丼' },
        price: '11,000',
        imageUrl: 'https://picsum.photos/seed/maporice/400/260',
        desc: {
          ko: '매콤한 마파두부를 밥 위에 듬뿍 올린 덮밥입니다.',
          en: 'Rice bowl topped with spicy mapo tofu.',
          ja: ''
        }
      },
      {
        id: 'japtang-rice',
        name: { ko: '잡탕밥', en: 'Mixed seafood & meat rice', ja: '雑湯丼' },
        price: '17,000',
        imageUrl: 'https://picsum.photos/seed/japtangrice/400/260',
        desc: {
          ko: '각종 해물과 고기를 걸쭉한 소스에 넣어 밥과 함께 즐기는 메뉴입니다.',
          en: 'Rice topped with mixed seafood and meat in a thick savory sauce.',
          ja: ''
        }
      },
      {
        id: 'yusanseul-rice',
        name: { ko: '유산슬밥', en: 'Yusanseul rice', ja: 'ユサンスル丼' },
        price: '17,000',
        imageUrl: 'https://picsum.photos/seed/yusanseulrice/400/260',
        desc: {
          ko: '유산슬 요리를 밥 위에 올려 한 그릇으로 즐길 수 있는 메뉴입니다.',
          en: 'Rice bowl topped with yusanseul (seafood and vegetables in thick sauce).',
          ja: ''
        }
      }
    ]
  }
};
