import type { NextPage } from 'next';

import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => (
    <>
        <Header />
        <MainSection />
        <div className="text-4xl text-red-400">test</div>
        <section className="w-screen bg-gray-600 text-center text-4xl text-green-500">
            <p>This is so crazy</p>
            <h1>This is VERY INTERESTNIG</h1>
        </section>
        <Footer />
    </>
);

export default Home;
