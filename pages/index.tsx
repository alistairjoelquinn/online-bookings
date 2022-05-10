/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
    <div className="max-w-6xl px-4 pt-5 pb-0 text-left md:pt-16 md:pb-20 lg:max-w-xl">
        <div className="text-5xl font-extrabold dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl">
            <h3>Felicity Quinn</h3>
            <span className="block text-5xl text-purple-700 md:text-6xl lg:text-5xl">English Teacher</span>
        </div>

        <p className="para">
            Hi, I&apos;m Felicity. I&apos;m an English teacher from Scotland, living in Berlin, Germany. I&apos;m
            passionate about helping people from all over the world to reach their language learning goals smiling.
        </p>

        <Link href="/calendar" passHref>
            <button type="button" className="btn mr-5 mb-5 md:mb-0">
                Book Online
            </button>
        </Link>
        <Link href="/about" passHref>
            <button type="button" className="btn-invert mb-5 md:mb-0">
                Learn More
            </button>
        </Link>
    </div>
);

export default Home;
