import type { NextPage } from 'next';
import Head from 'next/head';

import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Felicity Quinn - English Teacher</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <MainSection />
        <div>test</div>
        <Footer />
    </>
);

export default Home;
