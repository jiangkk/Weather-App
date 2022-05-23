import React from 'react';
import { getHour } from '@/common/utils';
import { useHoursWeather } from '@/hooks/useWeather';
import Temperature from '@/components/Temperature';
import styles from './Hours.module.less';

export default function Hours () {
  const hoursWeather = useHoursWeather();

  return (
    <div className={styles.hoursWrapper}>
      <div className={styles.hours}>
        {hoursWeather.map((hour, idx) => {
          return (
            <div className={styles.hourItem} key={idx}>
              <Temperature
                className={styles.tempValue}
                value={hour.temp}
                fontSize={25}
                color="#332821"
                heightOffset={2}
              />
              <div className={styles.timeValue}>{getHour(hour.fxTime).halfHourText}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}