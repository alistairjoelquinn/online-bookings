import ModalContainer from './ModalContainer';

interface Props {
    closeModal: (val: boolean) => void;
}

const ModalAdmin = ({ closeModal }: Props) => (
    <ModalContainer closeModal={closeModal}>
        <div className="flex flex-col justify-evenly text-sm md:text-base">I am the admin modal</div>
    </ModalContainer>
);

export default ModalAdmin;
