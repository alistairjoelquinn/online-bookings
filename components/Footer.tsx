import { Linkedin, Github, Mail } from 'grommet-icons';

const Footer = () => (
    <footer className="fixed bottom-0 left-0 flex items-center justify-evenly gap-10 p-10">
        <a href="https://github.com/alistairjoelquinn" target="_blank" rel="noreferrer noopener">
            <Github />
        </a>
        <a href="https://www.linkedin.com/in/alistairjoelquinn/" target="_blank" rel="noreferrer noopener">
            <Linkedin />
        </a>
        <Mail className="cursor-pointer" />
    </footer>
);

export default Footer;
