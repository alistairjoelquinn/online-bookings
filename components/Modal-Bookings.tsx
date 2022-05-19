import ModalContainer from './Modal-Container';

interface Props {
    closeModal: (val: boolean) => void;
}

const BookingsModal = ({ closeModal }: Props) => (
    <ModalContainer closeModal={closeModal}>Bookings Modal</ModalContainer>
);

export default BookingsModal;
