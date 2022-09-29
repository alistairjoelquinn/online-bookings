import { Linkedin, Mail, Moon } from 'grommet-icons';
import { updateDarkModePreference } from 'lib/utils';

interface Props {
  setShowEmailModal: (val: boolean) => void;
}

export default function Footer({ setShowEmailModal }: Props) {
  return (
    <footer className="bottom-0 left-0 flex animate-reveal items-center justify-evenly gap-10 p-10 md:fixed">
      <Mail cursor="pointer" onClick={() => setShowEmailModal(true)} />
      <a
        href="https://www.linkedin.com/in/felicity-quinn-9a4019235/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Linkedin cursor="pointer" />
      </a>
      <Moon cursor="pointer" onClick={updateDarkModePreference} />
    </footer>
  );
}
