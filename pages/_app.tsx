import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = ({ Component, pageProps }: AppProps) => (
    <ParallaxProvider>
        <Component {...pageProps} />
    </ParallaxProvider>
);

export default App;
