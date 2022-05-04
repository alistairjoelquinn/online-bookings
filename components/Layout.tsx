import Footer from './Footer';

const Layout: React.FC = ({ children }) => (
    <div>
        {children}
        <svg
            className="absolute inset-y-0 right-0 hidden h-full w-3/4 translate-x-1/2 transform text-purple-700 opacity-75 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <Footer />
    </div>
);

export default Layout;
