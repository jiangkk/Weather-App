import { KEY } from "./constants";
import { POSITION } from "../hooks/usePostion";

const BASE_URL = 'https://api.qweather.com/v7';


// 离线缓存高阶函数，如果检测到时离线，则检查是否有缓存数据，有则返回缓存数据
// 不是离线的话，请求完成后异步缓存数据
// 通过同参数的类似序列号的字符串得到key
function offlineCache (fn) {
  const serialize = (value = []) => value.reduce((pre, current) => {
    // 简单粗暴了点，后续可以优化
    const currentStr = typeof current === 'object'
      ? JSON.stringify(current)
      : String(current);
    return pre + currentStr;
  }, '');

  return function (...args) {
    if (!navigator.onLine) {
      const argsKey = serialize(args);
      const cacheValue = localStorage.getItem(argsKey);
      if (cacheValue) {
        return Promise.resolve(JSON.parse(cacheValue));
      }
    }

    return fn(...args).then(res => {
      // 用宏任务做异步
      setTimeout(() => {
        const argsKey = serialize(args);
        localStorage.setItem(argsKey, JSON.stringify(res));
      }, 0);
      return res;
    });
  }
}


function request({
  url,
  method = 'get',
  data = {},
}) {

  // 统一给请求返回带上位置信息
  const handleResponse = res => {
    res.position = POSITION
    return res;
  };


  url = `${BASE_URL}${url}?key=${KEY}&location=${POSITION.longitude},${POSITION.latitude}`;

  if (method.toLowerCase() === 'get') {
    const queryString = Object
      .keys(data)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');

    queryString && (url = `${url}&${queryString}`);
    return fetch(url).then(res => res.json()).then(handleResponse)
  }

  const fetchOptions = { body: JSON.stringify(data) };

  return fetch(url, fetchOptions).then(res => res.json()).then(handleResponse)

}

export default offlineCache(request);