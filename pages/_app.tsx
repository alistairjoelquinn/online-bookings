import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
    <section className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900">
        <Head>
            <title>Felicity Quinn - English Teacher</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
    </section>
);

export default App;
