import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useEffect } from 'react';
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
