import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { WEATHER_FIELD_CONFIG } from '@/common/constants';
import styles from './BaseInfo.module.less';


export default function BaseInfo (props) {
  const { data = {} } = props;
  
  return (
    <div className={styles.baseInfo}>
      <div className={styles.baseInfoTop}>
        <div className={styles.topLeft}>
          <Link to={'/'} className={cx(styles.back, 'iconfont', 'icon-back')}></Link>
          <div className={styles.cityName}>
            杭州市<br/>
            浙江省
          </div>
          <div className={styles.temp}>13<span className={styles.unit}>℃</span></div>
        </div>
        <div className={styles.topRight}>
          <img className={styles.img} src="https://s1.ax1x.com/2022/05/22/Ox4Jns.png"/>
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
              {data[field] || '-'}{unit}
            </div>
          );
        })}
      </div>
      <div className={styles.today}>Today</div>
    </div>
  )

}