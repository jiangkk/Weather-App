import React from 'react';
import TabBar from './components/TabBar';
import Now from './components/Now';
import Image from '@/components/Image';
import styles from './index.module.less';

export default function Home () {
  return (
    <div className={styles.home}>
      <div className='page-container'>
        <Image
          className={styles.logo}
          src="https://pic.imgdb.cn/item/628b934709475431293ef462.png"/>
        <Now />
        <TabBar />
      </div>
    </div>
  );
}