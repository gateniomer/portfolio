import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from '../components/Footer';
config.autoAddCss = false;

const poppins = Poppins({weight:'400'});

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
    <title>Omer Gatenio - Frontend Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <main className={poppins.className}>
      <Component {...pageProps} />
      <Footer/>
    </main>
  </>)
}
