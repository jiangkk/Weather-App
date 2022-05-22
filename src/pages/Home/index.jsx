import React from 'react';
import TabBar from './components/TabBar';
import Today from './components/Today';
import './style.less';

export default function Home () {
  return (
    <div className="home">
      <Today />
      <TabBar />
    </div>
  );
}