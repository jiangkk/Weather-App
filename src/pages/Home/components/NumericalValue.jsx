import React from 'react';
import { WEATHER_FIELD_CONFIG } from '@/common/constants';
import styles from './NumericalValue.module.less';


export default function NumericalValue (props) {
  const  { className = '', data = {} } = props;
  return (
    <div className={`${styles.numericalValue} ${className}`}>
      {WEATHER_FIELD_CONFIG.map((config, idx) => {
        const { icon, text, field, unit } = config;
        return (
          <div className={styles.valueItem} key={idx}>
            <span className={`iconfont icon-${icon}`}/>
            {text}
            <span className={styles.valueNumber}>{data[field]}{unit}</span>
          </div>
        )
      })}
    </div>
  );
}