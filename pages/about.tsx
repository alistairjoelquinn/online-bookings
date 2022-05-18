import Link from 'next/link';

const About = () => (
    <div className="relative z-10 pt-6 md:h-screen md:pt-16">
        <section className="max-w-6xl overflow-scroll px-4 pt-0 pb-6 text-left md:h-4/5 lg:max-w-xl">
            <div className="text-5xl font-extrabold dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl">
                <h3>About me.</h3>
            </div>
            <p className="para">
                I have a background in English Literature and Creative Writing. In 2020, following a period working in
                the hospitality industry, I decided to combine my love of English with my passion for working with
                people and became an English teacher. I now teach in a language school here in Berlin as well as online.
            </p>
            <p className="para">
                There is nothing I love more than helping people to reach their goals with confidence. I know that
                learning a language can sometimes be stressful. It can be difficult to stay motivated, so I aim to make
                it as fun and stress-free as possible.
            </p>
            <p className="para">
                I teach CEFR levels A2-C1 using a textbook, combined with other materials to help consolidate grammar in
                a simple, fun, and understandable way. These classes involve a good amount of conversation to practice
                what you&apos;ve learnt and reach a greater level of fluency more quickly. I will also provide written
                homework exercises for writing practice.
            </p>
            <p className="para">
                If you&apos;re not interested in reaching a certain level and just want to improve your speaking skills
                - you can book a conversation class instead. Here we will talk about a wide array of topics using
                conversation prompt questions. If you have a particular area of interest, I&apos;m happy to create a
                list of questions specific to this topic.
            </p>
            <Link href="/bookings" passHref>
                <button type="button" className="btn mr-5 mb-5 md:mb-0">
                    Book Now
                </button>
            </Link>
            <Link href="/" passHref>
                <button type="button" className="btn-invert mb-5 md:mb-0">
                    Home
                </button>
            </Link>
        </section>
    </div>
);

export default About;
