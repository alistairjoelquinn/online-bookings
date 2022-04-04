import { Parallax } from 'react-scroll-parallax';

const Header = () => (
    <header className="flex flex-col items-center justify-start py-4 font-dank">
        <Parallax opacity={[10, 0]} speed={0} className="py-6 text-5xl italic text-myblack">
            <h3>alistair quinn</h3>
        </Parallax>
        <hr className="h-0.5 w-4/6 rounded border-none bg-myblack" />
    </header>
);

export default Header;
