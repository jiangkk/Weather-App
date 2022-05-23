import { WEATHER_IMG_MAP } from "./constants";

// 获取周日期
export const getDateWeekDay = (date) => {
  date = date ? new Date(date) : new Date();

  const weekDayTextMap = [
    '周日',
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六',
  ];
  return weekDayTextMap[date.getDay()];
}


// 获取小时时间
export const getHour = (date) => {
  date = date ? new Date(date) : new Date();

  const hour = date.getHours();
  return {
    hour,
    halfHourText: hour > 12 ? `${hour % 12} pm` : `${hour} am`
  }
}


// 获取天气图标
export const getWeatherImg = (weatherText, date, needSmall = false) => {
  if (!weatherText) {
    return '';
  }

  const weatherKey = Object
    .keys(WEATHER_IMG_MAP)
    .find((text) => weatherText.includes(text)) || '晴';

  const weather = WEATHER_IMG_MAP[weatherKey];

  if (needSmall) {
    return weather.small;
  }

  if (!date) {
    return weather.day;
  }

  const hour = (new Date(date)).getHours();
  return hour >= 18 && hour < 6
    ? weather.night
    : weather.day;
}
