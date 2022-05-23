import React, { useState } from 'react';

export default function Image (props) {
  const [visible, setVisible] = useState(false);
  const onload = () => setVisible(true);

  return (
    <img
      style={!visible ? { display: 'none'} : {}}
      onLoad={onload}
      {...props}
    />
  );
}