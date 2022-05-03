/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

const Home: NextPage = () => (
    <section className="flex">
        <div className="m-16 h-1/4 w-1/3 overflow-hidden rounded-2xl shadow-xl">
            <img src="img/main-image.jpg" className="h-full w-full rounded-2xl object-cover" alt="Felicity Quinn" />
        </div>
        <div className="max-w-5xl px-4 pt-8 pb-20 text-center lg:w-1/2 lg:max-w-lg lg:py-48 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl">
                Felicity Quinn
                <span className="block text-purple-700">English Teacher</span>
            </h1>

            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 dark:text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
                I teach english and stuff and you learn english whichis the thing that i teachy teach
            </p>

            <div className="mt-10">
                <a href="/home" className="btn">
                    Book Online
                </a>
            </div>
        </div>
    </section>
);

export default Home;
