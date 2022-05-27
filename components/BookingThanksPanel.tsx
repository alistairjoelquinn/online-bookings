import React from 'react';
import { BookingData } from './ModalBookings';

interface Props {
    data: BookingData;
}

const BookingThanksPanel = ({ data }: Props) => (
    <>
        <p>Thank you {data.name}</p>
        <p>You have booked {data.type}</p>
        <p>
            For the {data.date} from {data.from} till {data.until}
        </p>
        <p>I look for to learning with you!</p>
    </>
);

export default BookingThanksPanel;
