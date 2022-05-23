import React from 'react';
import Routes from './routes';
import { useRegisterSW } from 'virtual:pwa-register/react';


function App() {
  useRegisterSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  });
  return (
    <>
      <Routes />
    </>
  )
}

export default App
