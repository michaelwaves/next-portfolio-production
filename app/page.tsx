"use client"
import store from '@/redux/store';
import { Provider } from 'react-redux';
import Scene from './scene';
export default function Page() {

  return (

    <Provider store={store}>
      <Scene />
    </Provider>

  )
}


