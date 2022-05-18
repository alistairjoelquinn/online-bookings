/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import EmailModal from './EmailModal';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
    const [showEmailModal, setShowEmailModal] = useState(false);

    return (
        <section className="flex min-h-screen w-screen flex-col bg-white from-gray-100 text-gray-900 dark:bg-gray-900 dark:from-gray-900 md:flex-row md:bg-gradient-to-r">
            <div className="m-0 h-full w-screen overflow-hidden rounded-none shadow-md md:m-16 md:h-1/5 md:w-1/5 md:rounded-2xl md:shadow-xl">
                <img
                    src="img/main-image.jpg"
                    className="h-full w-full rounded-none object-cover md:rounded-2xl"
                    alt="Felicity Quinn"
                />
            </div>
            {showEmailModal && <EmailModal />}
            {children}
            <svg
                className="absolute inset-y-0 right-0 -z-0 hidden h-full w-3/4 translate-x-1/2 transform text-purple-700 opacity-75 lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Footer setShowEmailModal={setShowEmailModal} />
        </section>
    );
};

export default Layout;
