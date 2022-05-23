import React from 'react';
import BaseInfo from './components/BaseInfo';
import Hours from './components/Hours';
import Days from './components/Days';

export default function Detail () {
  return (
    <div className='page-container'>
      <BaseInfo />
      <Hours />
      <Days />
    </div>
  );
}