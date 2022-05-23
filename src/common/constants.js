export const KEY = '66381596f11a42bf95673eb5523c69d2';


export const WEATHER_FIELD_CONFIG = [
  {
    icon: 'rain',
    text: '降水',
    field: 'precip',
    unit: '%',
    color: '#658ED9',
    bgColor: 'rgba(101, 142, 217, 0.1)'
  },
  {
    icon: 'temp',
    text: '湿度',
    field: 'humidity',
    unit: '%',
    color: '#D86191',
    bgColor: 'rgba(216, 97, 145, 0.1)'
  },
  {
    icon: 'wind',
    text: '风速',
    field: 'windSpeed',
    unit: 'km/h',
    color: '#5E4FC1',
    bgColor: 'rgba(94, 79, 193, 0.1)'
  }
];

// 由于第三方API提供的能力有限，自己维护一套自定义的天气图片
export const WEATHER_IMG_MAP = {
  '晴': {
    day: 'https://pic.imgdb.cn/item/628b821f09475431290e0cd9.png',
    night: 'https://pic.imgdb.cn/item/628b822909475431290e2a3a.png',
    small: 'https://pic.imgdb.cn/item/628b87ee09475431291d1e15.png'
  },
  '阴': {
    day: 'https://pic.imgdb.cn/item/628b81eb09475431290d70b4.png',
    night: 'https://pic.imgdb.cn/item/628b822909475431290e2a33.png',
    small: 'https://pic.imgdb.cn/item/628b87ee09475431291d1e0e.png'
  },
  '云': {
    day: 'https://pic.imgdb.cn/item/628b81eb09475431290d70b4.png',
    night: 'https://pic.imgdb.cn/item/628b822909475431290e2a33.png',
    small: 'https://pic.imgdb.cn/item/628b87ee09475431291d1e0e.png'
  },
  '雨': {
    day: 'https://pic.imgdb.cn/item/628b821f09475431290e0cad.png',
    night: 'https://pic.imgdb.cn/item/628b822909475431290e2a04.png',
    small: 'https://pic.imgdb.cn/item/628b87ee09475431291d1df8.png'
  },
  '风': {
    day: 'https://pic.imgdb.cn/item/628b821f09475431290e0cba.png',
    night: 'https://pic.imgdb.cn/item/628b822909475431290e2a0f.png',
    small: 'https://pic.imgdb.cn/item/628b87ee09475431291d1e04.png'
  },
  '雪': {
    day: 'https://pic.imgdb.cn/item/628b821f09475431290e0ca5.png',
    night: 'https://pic.imgdb.cn/item/628b822909475431290e29f9.png',
    small: 'https://pic.imgdb.cn/item/628b87ee09475431291d1dee.png'
  },
}