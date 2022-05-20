import ModalContainer from './ModalContainer';

interface Props {
    closeModal: (val: boolean) => void;
}

const ModalBookings = ({ closeModal }: Props) => (
    <ModalContainer closeModal={closeModal}>Bookings Modal</ModalContainer>
);

export default ModalBookings;
