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

    const updateBookingData = (e: any) => {
        setBookingData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('e: ', e);
        console.log('bookingData: ', bookingData);
    };

    return (
        <ModalContainer closeModal={closeModal}>
            <p className="modal mb-4">
                To complete the booking I need a few more details. Please fill in the remaining fields then click Book
                Now.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Select a date:
                    </p>
                    <input value={date} name="date" type="date" onChange={updateBookingData} className="input w-96" />
                </div>
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Full Name:
                    </p>
                    <input name="fullname" type="text" onChange={updateBookingData} className="input w-96" />
                </div>
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Email Address:
                    </p>
                    <input name="email" type="email" onChange={updateBookingData} className="input w-96" />
                </div>
                <button type="submit" className="btn">
                    Book Now
                </button>
            </form>
        </ModalContainer>
    );
};

export default ModalBookings;
