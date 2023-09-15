import store from '@/redux/store';
import { Provider } from 'react-redux';
import '@/app/globals.css';
import BackButton from '@/components/mobile/BackButton';
import { Lilita_One, Audiowide, STIX_Two_Text, Indie_Flower, VT323 } from 'next/font/google'
const lilitaOne = Lilita_One({ subsets: ['latin'], weight: ["400"], variable: "--font-lilita" })
const audiowide = Audiowide({ subsets: ['latin'], weight: ["400"], variable: "--font-audiowide" })
const indie = Indie_Flower({ subsets: ['latin'], weight: ["400"], variable: "--font-indie" })
const stix = STIX_Two_Text({ subsets: ['latin'], weight: ["400"], variable: "--font-stix" })
const vt323 = VT323({ subsets: ['latin'], weight: ["400"], variable: "--font-vt323" })


export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
    const controlsState = useAppSelector(getState)
    return (
        <Provider store={store} >
            <main className={`${lilitaOne.variable} ${audiowide.variable} ${indie.variable} ${stix.variable} ${audiowide.className} ${vt323.variable}`}>
                <BackButton />
                <Component {...pageProps} />

            </main>
        </Provider>
    );
}