import type { NextPage } from 'next';
import Head from 'next/head';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Alistair Quinn - Web Developer</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <header className="flex flex-col items-center justify-start py-4 font-dank">
            <h3 className="py-6 text-5xl italic text-myblack">alistair quinn</h3>
            <hr className="h-0.5 w-4/6 rounded border-none bg-myblack" />
        </header>
        <div className="absolute top-0 -left-40 -z-10 h-screen min-w-full max-w-3xl -translate-x-96 -translate-y-96 -rotate-45 bg-myyellow" />
        <MainSection />
        <Footer />
    </>
);

export default Home;
