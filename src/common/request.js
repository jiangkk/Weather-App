import { KEY } from "./constants";
import { POSITION } from "../hooks/usePostion";

const BASE_URL = 'https://api.qweather.com/v7';

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

export default request;