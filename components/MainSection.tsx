const MainSection = () => {
    console.log('main section: ');
    return (
        <main style={{ height: '1000px' }} className="flex w-full flex-col items-center font-dank text-myblack">
            <section className="w-4/6 text-xl">
                <p className="pt-6 pb-6">Hi, I&#39;m Alistair.</p>
                <p className="pb-6">
                    I&#39;m a developer from Glasgow, Scotland, who is passionate about education and empowering people
                    through tech.
                </p>
                <p className="pb-6">
                    Currently, I&#39;m working as a Full Stack Web Development teacher at an exciting school in Berlin,
                    Germany, called Spiced Academy.
                </p>
            </section>
        </main>
    );
};

export default MainSection;
