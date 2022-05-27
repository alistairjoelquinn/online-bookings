import { useState } from 'react';
import ModalContainer from './ModalContainer';

interface Props {
    closeModal: (val: boolean) => void;
    date: string;
}

interface BookingData {
    date?: Date;
    name?: string;
    type?: 'cefr' | 'conversation' | 'business';
}

const ModalBookings = ({ closeModal, date }: Props) => {
    const [bookingData, setBookingData] = useState<BookingData>({});
    console.log('bookingData: ', bookingData);

    const updateBookingData = (e: any) => {
        setBookingData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <ModalContainer closeModal={closeModal}>
            <div className="mb-4 flex">
                <label
                    className="text-md py-3 pr-5 font-extrabold dark:text-gray-100 md:text-lg lg:text-xl"
                    htmlFor="date"
                >
                    Select a date:
                    <input
                        value={date}
                        name="date"
                        type="date"
                        onChange={updateBookingData}
                        className="input ml-4 flex-grow"
                    />
                </label>
            </div>
            <p className="modal">What type of lesson would you like to book?</p>
        </ModalContainer>
    );
};

export default ModalBookings;
