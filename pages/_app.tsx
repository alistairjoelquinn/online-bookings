import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Felicity Quinn - English Teacher</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    </>
);

export default App;
