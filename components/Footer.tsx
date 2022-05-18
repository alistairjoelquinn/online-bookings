import { Instagram, Linkedin, Mail, Moon } from 'grommet-icons';

const updateDarkModePreference = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else if (!document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
};

const Footer = () => (
    <footer className="bottom-0 left-0 flex items-center justify-evenly gap-10 p-10 md:fixed">
        <Mail className="cursor-pointer" />
        <Linkedin className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
        <Moon className="cursor-pointer" onClick={updateDarkModePreference} />
    </footer>
);

export default Footer;
