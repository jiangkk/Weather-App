import React from 'react';
import { Link } from 'react-router-dom';
import NumericalValue from './NumericalValue';
import styles from './Now.module.less';
import { getDateWeekDay, getHour, getWeatherImg } from '@/common/utils';
import { useNowWeather } from '@/hooks/useWeather';
import Image from '@/components/Image';
import Temperature from '@/components/Temperature';



export default function Now () {
  const nowWeather = useNowWeather();

  return (
    <div className={styles.now}>
      <div className={styles.panel}>
        <Image
          className={styles.nowImg}
          src={getWeatherImg(nowWeather.text, nowWeather.nowTime)}
        />
        <div className={styles.locationName}>{nowWeather.city}&nbsp;{nowWeather.province}</div>
        <div className={styles.nowInfo}>
          <div className={styles.nowInfoLeft}>
            <Temperature
              value={nowWeather.temp}
              fontSize={48}
              unitSize={12}
              heightOffset={6}
            />
            <div className={styles.nowDate}>{getDateWeekDay(nowWeather.nowTime)}
              <span className={styles.nowDateHour}>{getHour(nowWeather.nowTime).halfHourText}</span>
            </div>
          </div>
          <div className={styles.nowInfoRight}>
            <div
              className={styles.tag}
              style={{ backgroundColor: 'rgba(212, 66, 111, 0.5)', width: 72}}
            >
                {nowWeather.windDir}
            </div>
            <div
              className={styles.tag}
              style={{ backgroundColor: 'rgba(106, 117, 186, 0.5)', width: 50}}
            >
                {nowWeather.text}
            </div>
          </div>
        </div>
        <Link to="detail" className={styles.toDetail}>
          详情
        </Link>
      </div>
      <NumericalValue data={nowWeather}/>
    </div>
  )
}

