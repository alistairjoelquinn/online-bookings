/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
    <section className="flex flex-col md:flex-row">
        <div className="m-0 h-full w-screen overflow-hidden rounded-none shadow-xl md:m-16 md:h-1/5 md:w-1/5 md:rounded-lg">
            <img
                src="img/main-image.jpg"
                className="h-full w-full rounded-none object-cover md:rounded-2xl"
                alt="Felicity Quinn"
            />
        </div>
        <div className="max-w-6xl px-4 pt-5 pb-0 text-left md:pt-16 md:pb-20 lg:w-1/2 lg:max-w-xl">
            <div className="text-5xl font-extrabold dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl">
                <h3>Felicity Quinn</h3>
                <span className="block text-5xl text-purple-700 md:text-6xl lg:text-5xl">English Teacher</span>
            </div>

            <p className="mb-10 mt-3 max-w-lg text-2xl tracking-wide text-gray-500 dark:text-gray-400 md:mt-5 md:max-w-lg">
                Hi, I&apos;m Felicity. I&apos;m an English teacher from Scotland, living in Berlin, Germany. I&apos;m
                passionate about helping people from all over the world to reach their language learning goals smiling.
            </p>

            <Link href="/" passHref>
                <button type="button" className="btn mr-5 mb-5 md:mb-0">
                    Book Online
                </button>
            </Link>
            <Link href="/" passHref>
                <button type="button" className="btn-invert mb-5 md:mb-0">
                    Learn More
                </button>
            </Link>
        </div>
    </section>
);

export default Home;
