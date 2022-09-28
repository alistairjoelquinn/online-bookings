import Footer from 'components/Footer';
import ModalEmail from 'components/ModalEmail';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <section className="flex min-h-screen w-screen flex-col bg-white from-gray-100 text-gray-900 dark:bg-gray-900 dark:from-gray-900 md:flex-row md:bg-gradient-to-r">
      <div className="item-center m-0 flex h-full w-screen flex-col overflow-hidden md:m-16 md:h-1/5 md:w-1/5 md:p-2">
        <div className="mb-4 rounded-none shadow-md md:rounded-2xl md:shadow-lg">
          <img
            src="img/main-image.jpg"
            className="h-full w-full rounded-none object-cover md:rounded-2xl"
            alt="Felicity Quinn"
          />
        </div>
        {router.pathname === '/bookings' && (
          <Link href="/" passHref>
            <button
              type="button"
              className="btn-invert mx-4 mt-4 mb-8 w-auto animate-reveal md:mx-0 md:w-full"
            >
              Home
            </button>
          </Link>
        )}
      </div>
      {showEmailModal && <ModalEmail setShowEmailModal={setShowEmailModal} />}
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
}
