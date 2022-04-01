import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    console.log('home page');
    return (
        <>
            <Head>
                <title>alistarquinn.com</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-start py-2">
                <h1 className="pt-6 pb-4 font-lora text-4xl italic text-red-500">alistair quinn</h1>
                <div className="h-0.5 w-4/6 rounded bg-red-500" />
            </div>
        </>
    );
};

export default Home;
