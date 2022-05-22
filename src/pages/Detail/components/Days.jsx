import React from 'react';
import styles from './Days.module.less';

export default function Days (props) {

  const mockHours = [
    {
      time: '周一',
      maxTemp: 15,
      minTemp: 10,
      text: '阴天'
    },
    {
      time: '周一',
      maxTemp: 15,
      minTemp: 10,
      text: '阴天'
    },
    {
      time: '周一',
      maxTemp: 15,
      minTemp: 10,
      text: '阴天'
    }, {
      time: '周一',
      maxTemp: 15,
      minTemp: 10,
      text: '阴天'
    }, {
      time: '周一',
      maxTemp: 15,
      minTemp: 10,
      text: '阴天'
    },
   
  ]

  return (
    <div className={styles.days}>
      {mockHours.map((day) => {
        return (
          <div className={styles.dayItem} key={day.time}>
            <div className={styles.dayValue}>{day.time}</div>
            <div className={styles.weatherValue}>{day.text}</div>
            <div className={styles.tempValue}>{day.maxTemp}{day.minTemp}</div>
          </div>
        )
      })}
    </div>
  );
}