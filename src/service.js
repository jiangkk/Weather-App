import request from './common/request';



export const fetchNowWeather = data => {
  return request({
    url: '/weather/now',
    data
  })
}

export const fetchHoursWeather = data => {
  return request({
    url: '/weather/24h',
    data
  })
}


export const fetchWeekWeather = data => {
  return request({
    url: '/weather/7d',
    data
  })
}