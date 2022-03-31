import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const name = 'alistair';
  const me = 'hell';
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-4xl text-red-500">I am the HOME PAGE</h1>
      </div>
    </>
  );
};

export default Home;
