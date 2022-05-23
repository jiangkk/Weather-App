import React, { useEffect, useState } from 'react';
import { fetchNowWeather, fetchHoursWeather, fetchWeekWeather } from '../service';
import usePosition from './usePostion';


// 获取当前实时天气
export function useNowWeather (deps = []) {
  const [nowWeather, setNowWeather] = useState({});
  const postion = usePosition();

  useEffect(() => {
    fetchNowWeather().then(res => {
      const { now, position, updateTime } = res;
      setNowWeather({
        ...now,
        ...position,
        nowTime: updateTime
      });
    })
  }, [postion, ...deps]); // 监听position变化

  return nowWeather;
}


// 获取7天时间天气
export function useWeekWeather (deps = []) {
  const [weekWeather, setWeekWeather] = useState([]);
  const postion = usePosition();

  useEffect(() => {
    fetchWeekWeather().then(res => {
      setWeekWeather(res.daily || [])
    })
  }, [postion, ...deps]); // 监听position变化

  return weekWeather;
}



// 获取24小时时间天气
export function useHoursWeather (deps = []) {
  const [hoursWeather, setHoursWeather] = useState([]);
  const postion = usePosition();

  useEffect(() => {
    fetchHoursWeather().then(res => {
      setHoursWeather(res.hourly || [])
    })
  }, [postion, ...deps]); // 监听position变化

  return hoursWeather;
}