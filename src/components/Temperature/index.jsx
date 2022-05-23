import React from 'react';
import styles from './index.module.less';

export default function Temperature (props) {
  const {
    className = '',
    fontSize = 22,
    unitSize = 12,
    color,
    heightOffset,
    bold = true,
    value
  } = props;

  const remUnitSize = `${unitSize/100}rem`;
  const unitStyle = {
    fontSize: remUnitSize,
    lineHeight: remUnitSize,
    height: remUnitSize,
    color
  };
  
  const remFontSize = `${fontSize/100}rem`
  const fontStyle = {
    color,
    marginTop: heightOffset ? `-${heightOffset / 100}rem` : 0,
    fontSize: remFontSize,
    fontWeight: bold ? 700 : 500
  };

  return (
    <div className={`${styles.temperature} ${className}`}>
      <span style={fontStyle}>{value}</span>
      <span style={unitStyle}>℃</span>
    </div>
  )
}