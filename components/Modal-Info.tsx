import ModalContainer from './Modal-Container';

interface Props {
    closeModal: (val: boolean) => void;
}

const InfoModal = ({ closeModal }: Props) => <ModalContainer closeModal={closeModal}>Info Modal</ModalContainer>;

export default InfoModal;
