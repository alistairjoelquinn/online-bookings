import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '../components/Layout';
import '../styles/globals.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <title>Felicity Quinn - English Teacher</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        </SessionProvider>
    );
};

export default App;
