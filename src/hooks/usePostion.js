import { useEffect, useState } from 'react';
import { KEY } from '../common/constants';

const FECTH_GEO_URL = `https://geoapi.qweather.com/v2/city/lookup?key=${KEY}`;
const LOCAL_STORAGE_POSTION = localStorage.getItem('LOCAL_STORAGE_POSTION');

// 先使用本地缓存的
const DEFAULT_LOCATION = LOCAL_STORAGE_POSTION
  ? JSON.parse(LOCAL_STORAGE_POSTION)
  : {
      latitude: 30.256314,
      longitude: 120.148253,
      city: '杭州市',
      province: '浙江省'
    };

// 可以全局直接引用，
export const POSITION = Object.assign(
  { hasCache: false },
  DEFAULT_LOCATION
);


// 这个hook返回一个positon数据
// 为了优化首次获取时间和用户体验，做了两层缓存策略
function usePosition() {
  const [postion, setPostion] = useState(DEFAULT_LOCATION);
  useEffect(() => {
    // 如果已经是缓存了 不用做任何事情
    if (POSITION.hasCache) {
      return;
    }

    // 如果没有缓存数据，那么需要进行初始化
    if (!navigator.geolocation || !navigator.geolocation.getCurrentPosition) {
      return;
    }

    navigator.geolocation.getCurrentPosition((position = {}) => {
      const { coords = {} } = position;

      // 更新内存缓存经纬度
      POSITION.latitude = coords.latitude;
      POSITION.longitude = coords.longitude;

      // 由于第三方开放api能力有限，为了方便后续调用位置信息，还需要先请求一次获取城市信息
      const url = `${FECTH_GEO_URL}&location=${POSITION.longitude},${POSITION.latitude}`
      fetch(url)
        .then(res => res.json())
        .then(res => {

          const { location = [] } = res || {};
          const { adm2: city, adm1: province } = location[0] || {};

          // 更新内存缓存城市位置信息
          POSITION.city = city;
          POSITION.province = province;

          POSITION.hasCache = true;

          // 更新state 有依赖的地方重新请求
          setPostion(POSITION);

          // 异步本地持久化缓存
          Promise
            .resolve()
            .then(() => {
              const localPosition = {
                ...POSITION,
                hasCache: false
              };

              localStorage.setItem('LOCAL_STORAGE_POSTION', JSON.stringify(localPosition))
            });
        });

    })

  }, []);

  // 先返回默认值，然后再初始化完成之后可以再更新，从而提升体验
  return postion;
}


export default usePosition;