import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { WEATHER_FIELD_CONFIG } from '@/common/constants';
import { useNowWeather } from '@/hooks/useWeather';
import { getWeatherImg } from '@/common/utils';
import Image from '@/components/Image';
import styles from './BaseInfo.module.less';
import Temperature from '@/components/Temperature';


export default function BaseInfo () {
  const nowWeather = useNowWeather();
  
  return (
    <div className={styles.baseInfo}>
      <div className={styles.baseInfoTop}>
        <div className={styles.topLeft}>
          <Link to={'/'} className={cx(styles.back, 'iconfont', 'icon-back')}></Link>
          <div className={styles.cityName}>
            {nowWeather.city}<br/>
            {nowWeather.province}
          </div>
          <Temperature
            className={styles.temp}
            value={nowWeather.temp}
            fontSize={70}
            unitSize={18}
            color="#332821"
            heightOffset={10}
          />
        </div>
        <div className={styles.topRight}>
          <Image className={styles.img} src={getWeatherImg(nowWeather.text, nowWeather.nowTime)}/>
        </div>
      </div>
      <div className={styles.baseInfoBottom}>
        {WEATHER_FIELD_CONFIG.map((config, idx) => {
          const {
            icon,
            field,
            unit,
            color,
            bgColor
          } = config;
          return (
            <div
              className={styles.tagItem}
              key={idx}
              style={{ color, backgroundColor: bgColor }}
            >
              <span className={`iconfont icon-${icon}`}></span>
              {nowWeather[field] || '-'}{unit}
            </div>
          );
        })}
      </div>
      <div className={styles.today}>Today</div>
    </div>
  )

}