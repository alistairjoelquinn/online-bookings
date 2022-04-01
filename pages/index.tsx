import type { NextPage } from 'next';
import Head from 'next/head';
import { Linkedin, Github, Mail } from 'grommet-icons';

const Home: NextPage = () => {
    console.log('home page');
    return (
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
            <main className="flex w-full flex-col items-center font-dank text-myblack">
                <section className="w-4/6 text-xl">
                    <p className="pt-6 pb-6">Hi, I&#39;m Alistair.</p>
                    <p className="pb-6">
                        I&#39;m a developer from Glasgow, Scotland, who is passionate about education and empowering
                        people through tech.
                    </p>
                    <p className="pb-6">
                        Currently, I&#39;m working as a Full Stack Web Development teacher at an exciting school in
                        Berlin, Germany, called Spiced Academy.
                    </p>
                </section>
            </main>
            <footer className="absolute bottom-0 left-0 flex items-center justify-evenly gap-10 p-10">
                <a href="https://github.com/alistairjoelquinn" target="_blank" rel="noreferrer noopener">
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/alistairjoelquinn/" target="_blank" rel="noreferrer noopener">
                    <Linkedin />
                </a>
                <Mail className="cursor-pointer" />
            </footer>
        </>
    );
};

export default Home;
