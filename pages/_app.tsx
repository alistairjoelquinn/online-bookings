import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Felicity Quinn - English Teacher</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
);

export default App;
