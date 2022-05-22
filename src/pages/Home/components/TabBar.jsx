import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './TabBar.module.less';


const TABS = [
  {
    link: '/',
    icon: 'home',
    text: 'Home'
  }
]

export default function TabBar (props) {
  // TODO:
  const activeTabIdx = 0;

  return (
    <div className={styles.tabbar}>
      {TABS.map((config, idx) => {
        const { link, text, icon } = config;
        return (
          <Link
            key={idx}
            to={link}
            className={cx(
              styles.tabItem,
              { [styles.active]: idx === activeTabIdx }
            )}
          >
            <span className={`iconfont icon-${icon} ${styles.icon}`}/>
            <div className={styles.text}>{text}</div>
          </Link>
        );
      })}
    </div>
  );
}