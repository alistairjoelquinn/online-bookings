/* eslint-disable @next/next/no-img-element */
import Footer from './Footer';

const Layout: React.FC = ({ children }) => (
    <section className="flex min-h-screen w-screen flex-col bg-gray-50 bg-gradient-to-r from-gray-100 to-white text-gray-900 dark:bg-gray-900 md:flex-row">
        <div className="m-0 h-full w-screen overflow-hidden rounded-none shadow-xl md:m-16 md:h-1/5 md:w-1/5 md:rounded-2xl">
            <img
                src="img/main-image.jpg"
                className="h-full w-full rounded-none object-cover md:rounded-2xl"
                alt="Felicity Quinn"
            />
        </div>

        {children}
        <svg
            className="absolute inset-y-0 right-0 hidden h-full w-3/4 translate-x-1/2 transform text-purple-700 opacity-75 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <polygon className="bg-gradient-to-r from-purple-800" points="50,0 100,0 50,100 0,100" />
        </svg>
        <Footer />
    </section>
);

export default Layout;
