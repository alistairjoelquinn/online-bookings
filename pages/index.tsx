import type { NextPage } from 'next';
import Head from 'next/head';

import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Alistair Quinn - Web Developer</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <div className="absolute top-0 -left-40 -z-10 h-screen min-w-full max-w-3xl -translate-x-96 -translate-y-96 -rotate-45 bg-myyellow" />
        <MainSection />
        <Footer />
    </>
);

export default Home;
