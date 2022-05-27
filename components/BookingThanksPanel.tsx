import React from 'react';
import { BookingData } from './ModalBookings';

interface Props {
    data: BookingData;
}

const BookingThanksPanel = ({ data }: Props) => {
    console.log('data: ', data);
    return <p>Thank you for submitting your booking</p>;
};

export default BookingThanksPanel;
