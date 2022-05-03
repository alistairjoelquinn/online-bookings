/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
const tv = () => (
    <main className="bg-gray-50 p-0 text-gray-900 dark:bg-gray-900">
        <section className="lg:relative lg:mx-auto lg:max-w-7xl">
            <div className="h-64 sm:h-72 md:h-96 lg:absolute lg:right-0 lg:h-full lg:w-1/2">
                <img className="h-full w-full object-cover" src="img/hero.jpg" alt="Star Wars" />
            </div>

            <div className="max-w-5xl px-4 pt-8 pb-20 text-center lg:w-1/2 lg:max-w-lg lg:py-48 lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl">
                    Watch your favorite
                    <span className="block text-purple-700">movies and TV shows</span>
                </h1>

                <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 dark:text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>

                <div className="mt-10">
                    <a href="/home" className="btn">
                        Get Started!
                    </a>
                </div>
            </div>
        </section>

        <ul className="mx-auto mt-28 space-y-12 px-5 sm:max-w-2xl md:mt-36 lg:mt-32 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            <li className="rounded-md border bg-purple-50 px-3 py-5 dark:border-gray-700 dark:bg-gray-800 lg:h-[17.6rem]">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:h-full lg:gap-8">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                            className="rounded-lg object-cover object-bottom shadow-lg sm:object-center"
                            src="img/black-widow.jpg"
                            alt="Black Widow"
                        />
                    </div>

                    <div className="space-y-4 sm:relative sm:col-span-2 sm:h-full">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className="dark:text-white">Black Widow</h3>
                            <p className="text-purple-600">Movie</p>
                        </div>

                        <p className="text-base text-gray-500 line-clamp-5">
                            Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with
                            ties to her past arises. Natasha Romanoff confronts the darker parts of her ledger when a
                            dangerous conspiracy with ties to her past arises.
                        </p>

                        <button className="btn px-3 py-1 sm:absolute sm:bottom-0">Watch</button>
                    </div>
                </div>
            </li>

            <li className="rounded-md border bg-purple-50 px-3 py-5 dark:border-gray-700 dark:bg-gray-800 lg:h-[17.6rem]">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:h-full lg:gap-8">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="rounded-lg object-cover shadow-lg" src="img/dune.jpg" alt="Dune" />
                    </div>

                    <div className="space-y-4 sm:relative sm:col-span-2 sm:h-full">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className="dark:text-white">Dune</h3>
                            <p className="text-purple-600">Movie</p>
                        </div>

                        <p className="text-base text-gray-500 line-clamp-5">
                            Feature adaptation of Frank Herberts science fiction novel, about the son of a noble family
                            entrusted with the protection of the most valuable asset and most vital element in the
                            galaxy.Feature adaptation of Frank Herberts science fiction novel, about the son of a noble
                            family entrusted with the protection of the most valuable asset and most vital element in
                            the galaxy.
                        </p>

                        <button className="btn px-3 py-1 sm:absolute sm:bottom-0">Watch</button>
                    </div>
                </div>
            </li>

            <li className="rounded-md border bg-purple-50 px-3 py-5 dark:border-gray-700 dark:bg-gray-800 lg:h-[17.6rem]">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:h-full lg:gap-8">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                            className="rounded-lg object-cover object-bottom shadow-lg sm:object-center"
                            src="img/loki.jpg"
                            alt="Loki"
                        />
                    </div>

                    <div className="space-y-4 sm:relative sm:col-span-2 sm:h-full">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className="dark:text-white">Loki</h3>
                            <p className="text-purple-600">TV Show</p>
                        </div>

                        <p className="text-base text-gray-500 line-clamp-5">
                            The mercurial villain Loki resumes his role as the God of Mischief in a new series that
                            takes place after the events of “Avengers: Endgame.” The mercurial villain Loki resumes his
                            role as the God of Mischief in a new series that takes place after the events of “Avengers:
                            Endgame.”
                        </p>

                        <button className="btn px-3 py-1 sm:absolute sm:bottom-0">Watch</button>
                    </div>
                </div>
            </li>

            <li className="rounded-md border bg-purple-50 px-3 py-5 dark:border-gray-700 dark:bg-gray-800 lg:h-[17.6rem]">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:h-full lg:gap-8">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                            className="rounded-lg object-cover object-bottom shadow-lg sm:object-center"
                            src="img/mare-of-easttown.jpg"
                            alt="Mare of Easttown"
                        />
                    </div>

                    <div className="space-y-4 sm:relative sm:col-span-2 sm:h-full">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className="dark:text-white">Mare of Easttown</h3>
                            <p className="text-purple-600">TV Show</p>
                        </div>

                        <p className="text-base text-gray-500 line-clamp-5">
                            A detective in a small Pennsylvania town investigates a local murder while trying to keep
                            her life from falling apart. A detective in a small Pennsylvania town investigates a local
                            murder while trying to keep her life from falling apart.
                        </p>

                        <button className="btn px-3 py-1 sm:absolute sm:bottom-0">Watch</button>
                    </div>
                </div>
            </li>
        </ul>

        <div className="prose prose-purple mx-auto px-5 py-20 dark:prose-dark md:px-0 lg:prose-lg lg:mt-24">
            <hr className="mx-auto w-20" />

            <h2>Whats this?</h2>
            <p className="lead">
                This is a streaming service that offers a wide variety of award-winning
                <em>TV shows</em>, <em>movies</em>, <em>anime</em>, <em>documentaries</em>, and more on thousands of
                internet-connected devices.
            </p>

            <p>
                You can watch as much as you want, whenever you want without a single commercial - all for one low
                monthly price. Theres always something new to discover and new TV shows and movies are added every week!
            </p>

            <figure>
                <img src="img/tv-and-remote.jpg" alt="TV & Remote" />
                <figcaption>There are even remote controls that have a button for direct access to our app!</figcaption>
            </figure>

            <h2>Where can I watch?</h2>
            <p>
                Watch anywhere, anytime, on an unlimited number of devices. Sign in with your account to watch instantly
                on the web from your personal computer or on any internet-connected device that offers the app,
                including:
            </p>

            <ul>
                <li>Smart TVs</li>
                <li>Smartphones</li>
                <li>Tablets</li>
                <li>Streaming media players</li>
                <li>Game consoles</li>
            </ul>

            <h2>How much does it cost?</h2>
            <p>We offer two price tiers:</p>
            <table>
                <thead>
                    <tr>
                        <th />
                        <th>Standard</th>
                        <th>Premium</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td>
                            <strong>$ 5</strong>
                        </td>
                        <td>
                            <strong>$ 10</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Simultaneous devices</td>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Video quality</td>
                        <td>HD</td>
                        <td>Ultra HD</td>
                    </tr>
                </tbody>
            </table>

            <h2>How do I cancel?</h2>
            <p>
                We are flexible. There are no pesky contracts and no commitments. You can easily cancel your account
                online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </p>

            <h2>I have some questions</h2>
            <p>
                Write to us at <a href="mailto:info@example.com">info@example.com</a> if you have any issues.
            </p>

            <h2>Sign Up</h2>
            <form action="/home" method="POST" className="grid grid-cols-1 gap-y-5">
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input name="email" type="email" className="input" placeholder="Email" />

                <label htmlFor="password" className="sr-only">
                    Phone
                </label>
                <input type="password" name="password" className="input" placeholder="Password" />

                <div>
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
    </main>
);

export default tv;
