import BookingFormFields from 'components/BookingFormFields';
import BookingThanksPanel from 'components/BookingThanksPanel';
import ModalContainer from 'components/ModalContainer';
import checkBookingAvailable from 'lib/check-booking-available';
import checkNoBookingClash from 'lib/check-no-booking-clash';
import { isoify } from 'lib/utils';
import { AvailableTime, BookedTime } from 'models/calendar';
import { useState } from 'react';
import { useQueryClient } from 'react-query';

interface Props {
  closeModal: (val: boolean) => void;
  date: string;
  populate?: BookedTime | null;
  clearState?: () => void;
  available?: AvailableTime[] | undefined;
  booked?: BookedTime[] | undefined;
}

export default function ModalBookings({
  closeModal,
  date,
  populate,
  clearState,
  available,
  booked,
}: Props) {
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
      [e.target.name]: e.target.value.trim(),
      date: !prevData.date && date ? date : prevData.date || '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.values(bookingData).filter(Boolean).length !==
      Object.values(bookingData).length
    ) {
      setError('Remember to fill out all the input fields...');
    }
    if (available && !checkBookingAvailable(bookingData, available)) {
      setError(
        'You need to make sure the booking falls within the available time slots.',
      );
      return;
    }
    if (booked && checkNoBookingClash(bookingData, booked)) {
      setError(
        'This clashes with another booking. Make sure you have chosen an available slot.',
      );
      return;
    }
    const isoData = isoify(bookingData);
    const res = await fetch('/api/submit-user-booking', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(isoData),
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
}
