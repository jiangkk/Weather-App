import React from 'react';
import styles from './Hours.module.less';

export default function Hours (props) {

  const mockHours = [
    {
      time: 10,
      temp: 11
    },
    {
      time: 10,
      temp: 11
    },
    {
      time: 10,
      temp: 11
    },
    {
      time: 10,
      temp: 11
    },
    {
      time: 10,
      temp: 11
    },
    {
      time: 10,
      temp: 11
    }
  ]

  return (
    <div className={styles.hoursWrapper}>
      <div className={styles.hours}>
        {mockHours.map((hour) => {
          return (
            <div className={styles.hourItem} key={hour.time}>
              <div className={styles.tempValue}>{hour.temp}</div>
              <div className={styles.timeValue}>{hour.time}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}