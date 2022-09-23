import Link from 'next/link';
import React from 'react';

export default function FourOhFour() {
  return (
    <div className="relative z-10 animate-reveal pt-6 dark:text-gray-100 md:h-screen md:pt-16">
      <section className="max-w-6xl overflow-scroll px-4 pt-0 pb-6 text-left md:h-5/6 lg:max-w-xl">
        <h4 className="mb-6 text-5xl font-extrabold sm:text-5xl md:text-4xl lg:text-5xl">
          Oh boy you messed up this time...
        </h4>{' '}
        <Link href="/" passHref>
          <button type="button" className="btn mr-5 mb-5 w-56 md:mb-0">
            Back To Safety
          </button>
        </Link>
      </section>
    </div>
  );
}
