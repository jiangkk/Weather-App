import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Today.module.less';


export default function Today () {

  return (
    <div className={styles.today}>
      <div className={styles.panel}>
        <img
          className={styles.nowImg}
          src="https://s1.ax1x.com/2022/05/22/Ox4Jns.png"
        />
        <div className={styles.locationName}>杭州市，浙江省</div>
        <div className={styles.nowInfo}>
          <div className={styles.nowInfoLeft}>
            <div className={styles.nowTemp}>15<span className={styles.nowTempUnit}>℃</span></div>
            <div className={styles.nowDate}>周日,<span className={styles.nowDate}>11 am</span></div>
          </div>
          <div className={styles.nowInfoRight}>
            <div
              className={styles.tag}
              style={{ backgroundColor: 'rgba(212, 66, 111, 0.5)', width: 72}}
            >
                强风
            </div>
            <div
              className={styles.tag}
              style={{ backgroundColor: 'rgba(106, 117, 186, 0.5)', width: 50}}
            >
                阴
            </div>
          </div>
        </div>
        <Link to="detail" className={styles.toDetail}>
          详情
        </Link>
      </div>
    </div>
  )
}

