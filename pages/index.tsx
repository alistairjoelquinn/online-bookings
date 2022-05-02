import type { NextPage } from 'next';

import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => (
    <>
        <Header />
        <MainSection />
        <div className="text-red-400 text-4xl">test</div>
        <Footer />
    </>
);

export default Home;
