import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { BookedTime } from '../models/calendar';

import BookingFormFields from './BookingFormFields';
import BookingThanksPanel from './BookingThanksPanel';
import ModalContainer from './ModalContainer';

interface Props {
    closeModal: (val: boolean) => void;
    date: string;
    populate?: BookedTime | null;
    clearState?: () => void;
}

const ModalBookings = ({ closeModal, date, populate, clearState }: Props) => {
    const queryClient = useQueryClient();
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [bookingData, setBookingData] = useState<BookedTime>(
        populate
            ? { ...populate }
            : {
                  date: date && '',
                  start: '',
                  end: '',
                  name: '',
                  email: '',
                  type: '',
              },
    );

    const updateBookingData = (e: any) => {
        setBookingData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
            date: !prevData.date && date ? date : prevData.date || '',
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(bookingData).filter(Boolean).length !== Object.values(bookingData).length) {
            setError('Remember to fill out all the input fields...');
        }
        const res = await fetch('/api/submit-user-booking', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        const data = await res.json();
        if (data.error) {
            setError(data.error);
        } else if (data.success === true) {
            setSubmitted(true);
            queryClient.invalidateQueries('get-upcoming-times-and-bookings');
        } else {
            setError('Something unexpected went wrong!');
        }
    };

    return (
        <ModalContainer clearState={clearState} closeModal={closeModal}>
            {!submitted ? (
                <BookingFormFields
                    populate={populate}
                    date={date}
                    error={error}
                    updateBookingData={updateBookingData}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <BookingThanksPanel data={bookingData} />
            )}
        </ModalContainer>
    );
};

export default ModalBookings;
