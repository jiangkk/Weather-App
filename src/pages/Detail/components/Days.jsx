import React from 'react';
import { getDateWeekDay, getWeatherImg } from '@/common/utils';
import Image from '@/components/Image';
import { useWeekWeather } from '@/hooks/useWeather';
import styles from './Days.module.less';
import Temperature from '../../../components/Temperature';

export default function Days (props) {
  const weekWeather = useWeekWeather();

  return (
    <div className={styles.days}>
      {weekWeather.map((day, idx) => {
        return (
          <div className={styles.dayItem} key={idx}>
            <div className={styles.dayValue}>{getDateWeekDay(day.fxDate)}</div>
            <Image className={styles.weatherValue} src={getWeatherImg(day.textDay, null, true)}/>
            <div className={styles.tempValue}>
              <Temperature
                className={styles.tempMax}
                value={day.tempMax}
                fontSize={14}
                unitSize={8}
                bold={false}
                color="#332821"
                heightOffset={2}
              />
               <Temperature
                value={day.tempMin}
                fontSize={14}
                unitSize={8}
                bold={false}
                color={'rgba(51, 40, 33, 0.5)'}
                heightOffset={2}
              />
            </div>
          </div>
        )
      })}
    </div>
  );
}