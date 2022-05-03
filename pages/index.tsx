/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

const Home: NextPage = () => (
    <>
        <div className="m-16 h-1/4 w-1/3 overflow-hidden rounded-2xl shadow-xl">
            <img src="img/main-image.jpg" className="h-full w-full rounded-2xl object-cover" alt="Felicity Quinn" />
        </div>
        <h3>Felicity Quinn</h3>
    </>
);

export default Home;
