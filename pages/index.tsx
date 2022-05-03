/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

const Home: NextPage = () => (
    <section className="flex">
        <div className="m-16 h-1/5 w-1/5 overflow-hidden rounded-full shadow-xl lg:w-1/4 lg:rounded-2xl">
            <img src="img/main-image.jpg" className="h-full w-full rounded-2xl object-cover" alt="Felicity Quinn" />
        </div>
        <div className="max-w-6xl px-4 pt-16 pb-20 text-left lg:w-1/2 lg:max-w-xl">
            <h1 className="text-4xl font-extrabold dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl">
                Felicity Quinn
                <span className="block text-5xl text-purple-700">English Teacher</span>
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-lg tracking-wide text-gray-500 dark:text-gray-400 sm:text-xl md:mt-5 md:max-w-xl">
                Hi, I&apos;m Felicity. I&apos;m an English teacher from Scotland, living in Berlin, Germany. I&apos;m
                passionate about helping people from all over the world to reach their language learning goals smiling.
            </p>

            <div className="mt-10">
                <a href="/home" className="btn">
                    Book Online
                </a>
            </div>
        </div>
        <svg
            className="absolute inset-y-0 right-0 hidden h-full w-3/4 translate-x-1/2 transform text-purple-700 opacity-75 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
    </section>
);

export default Home;
