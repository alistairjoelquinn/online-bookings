import { Instagram, Linkedin, Mail, Moon } from 'grommet-icons';

const Footer = () => (
    <footer className="bottom-0 left-0 flex items-center justify-evenly gap-10 p-10 md:fixed">
        <Mail className="cursor-pointer" />
        <Linkedin className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
        <Moon className="cursor-pointer" />
    </footer>
);

export default Footer;
