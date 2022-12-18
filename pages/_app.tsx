import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const poppins = Poppins({weight:'400'});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={poppins.className}>
    <Component {...pageProps} />
  </main>
}
