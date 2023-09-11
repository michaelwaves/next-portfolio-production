import store from '@/redux/store';
import { Provider } from 'react-redux';
import '@/app/globals.css';

export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <Provider store={store} >
            <Component {...pageProps} />
        </Provider>
    );
}