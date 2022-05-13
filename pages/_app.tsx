import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/Layout';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
    <SessionProvider session={pageProps.session}>
        <Head>
            <title>Felicity Quinn - English Teacher</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </SessionProvider>
);

export default App;
