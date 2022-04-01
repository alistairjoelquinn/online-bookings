import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
    console.log('home page');
    return (
        <>
            <Head>
                <title>Home Page</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                <h1 className="font-josefin text-4xl text-red-500">I am the home page josefin</h1>
            </div>
        </>
    );
};

export default Home;
