import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    console.log('home page');
    return (
        <>
            <Head>
                <title>Full Stack Web Solutions</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header className="flex flex-col items-center justify-start py-2">
                <h3 className="pt-6 pb-4 font-lora text-4xl italic text-red-500">alistair quinn</h3>
                <hr className="h-0.5 w-4/6 rounded border-none bg-red-500" />
            </header>
            <main className="flex w-full flex-col items-center font-josefin">
                <section className="w-4/6">
                    <p>Hi, I&#39;m Alistair.</p>
                    <p>
                        I&#39;m a developer from Glasgow, Scotland, who is passionate about education and empowering
                        people through tech. Currently, I&#39;m working as a Full Stack Web Development teacher at an
                        exciting school in Berlin, Germany, called Spiced Academy.
                    </p>
                </section>
            </main>
        </>
    );
};

export default Home;
