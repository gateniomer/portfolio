import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from '../components/Footer';
config.autoAddCss = false;

const poppins = Poppins({weight:["400","700","900"],subsets:[]});

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
    <title>Omer Gatenio - Frontend Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name = "description" content = "I am highly motivated to turn my ideas into reality and have a strong passion for planning, designing, and developing projects and initiatives that can benefit myself and others." />
    <meta name = "author" content = "Omer Gatenio" />
    </Head>
    <main className={poppins.className}>
      <Component {...pageProps} />
      <Footer/>
    </main>
  </>)
}

