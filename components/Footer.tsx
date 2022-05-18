import { Linkedin, Mail, Moon } from 'grommet-icons';

interface Props {
    setShowEmailModal: (val: boolean) => void;
}

const updateDarkModePreference = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else if (!document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
};

const Footer = ({ setShowEmailModal }: Props) => (
    <footer className="bottom-0 left-0 flex items-center justify-evenly gap-10 p-10 md:fixed">
        <Mail cursor="pointer" onClick={() => setShowEmailModal(true)} />
        <a href="https://www.linkedin.com/in/felicity-quinn-9a4019235/" target="_blank" rel="noreferrer noopener">
            <Linkedin cursor="pointer" />
        </a>
        <Moon cursor="pointer" onClick={updateDarkModePreference} />
    </footer>
);

export default Footer;
