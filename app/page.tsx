"use client"
import store from '@/redux/store';
import { Provider } from 'react-redux';
import Scene from './scene';
import Mobile from './mobile';
import { MOBILE_WIDTH } from '@/data/MobileWidth';
import { useEffect, useState } from 'react';
export default function Page() {

  const [width, setWidth] = useState<number>(1000);
  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= MOBILE_WIDTH//768;

  return (

    <Provider store={store}>
      {isMobile ? <Mobile /> : <Scene />}
    </Provider>

  )
}


