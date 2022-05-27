import { useState } from 'react';
import ModalContainer from './ModalContainer';

interface Props {
    closeModal: (val: boolean) => void;
    date: string;
}

export interface BookingData {
    date: string;
    from: string;
    until: string;
    name: string;
    email: string;
    type: 'cefr' | 'conversation' | 'business' | '';
}

const ModalBookings = ({ closeModal, date }: Props) => {
    const [error, setError] = useState('');
    const [bookingData, setBookingData] = useState<BookingData>({
        date,
        from: '',
        until: '',
        name: '',
        email: '',
        type: '',
    });

    const updateBookingData = (e: any) => {
        setBookingData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(bookingData).filter(Boolean).length !== Object.values(bookingData).length) {
            setError('Remember to fill out all the input fields...');
        }
        console.log('bookingData: ', bookingData);
    };

    return (
        <ModalContainer closeModal={closeModal}>
            <p className="modal mb-4">
                {!error
                    ? 'To complete the booking I need a few more details. Please fill in the remaining fields then click Book Now.'
                    : error}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Select a date:
                    </p>
                    <input
                        value={date}
                        required
                        name="date"
                        type="date"
                        onChange={updateBookingData}
                        className="input w-96"
                    />
                </div>
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        From:
                    </p>
                    <input name="from" required type="time" onChange={updateBookingData} className="input mr-7 w-36" />
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Until:
                    </p>
                    <input name="until" required type="time" onChange={updateBookingData} className="input w-36" />
                </div>
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Full Name:
                    </p>
                    <input name="name" required type="text" onChange={updateBookingData} className="input w-96" />
                </div>
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Email Address:
                    </p>
                    <input name="email" required type="email" onChange={updateBookingData} className="input w-96" />
                </div>
                <div className="flex w-full justify-end">
                    <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                        Booking Type:
                    </p>
                    <select required name="type" onChange={updateBookingData} className="input w-96 pr-4">
                        <option value="">Choose an option...</option>
                        <option value="cefr">CEFR level class: A2 - C1</option>
                        <option value="conversation">Conversation class</option>
                        <option value="business">Business English class</option>
                    </select>
                </div>
                <button type="submit" className="btn">
                    Book Now
                </button>
            </form>
        </ModalContainer>
    );
};

export default ModalBookings;
