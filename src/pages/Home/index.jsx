import React from 'react';
import TabBar from './components/TabBar';
import Now from './components/Now';
import './style.less';

export default function Home () {
  return (
    <div className="home">
      <Now />
      <TabBar />
    </div>
  );
}