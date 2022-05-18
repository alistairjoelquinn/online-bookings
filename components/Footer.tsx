import { Instagram, Linkedin, Mail, Moon } from 'grommet-icons';

const Footer = () => (
    <footer className="bottom-0 left-0 flex items-center justify-evenly gap-10 p-10 md:fixed">
        <Mail className="cursor-pointer" />
        <Linkedin className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
        <Moon
            className="cursor-pointer"
            onClick={() =>
                document.documentElement.classList.contains('dark')
                    ? document.documentElement.classList.remove('dark')
                    : document.documentElement.classList.add('dark')
            }
        />
    </footer>
);

export default Footer;
