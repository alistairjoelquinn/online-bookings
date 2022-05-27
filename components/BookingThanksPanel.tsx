import React from 'react';
import { BookingData } from './ModalBookings';

interface Props {
    data: BookingData;
}

const lessonTypes = {
    cefr: 'CEFR level class',
    business: 'Busniess English Class',
    conversation: 'Conversation Class',
    '': '',
};

const BookingThanksPanel = ({ data }: Props) => (
    <div className="flex flex-col items-center gap-2">
        <p className="modal font-semibold">Thank you {data.name}</p>
        <p className="modal">
            You have booked a {lessonTypes[data.type]} from {data.from} till {data.until} on{' '}
            {new Date(data.date).toLocaleDateString('en-uk', { weekday: 'short', day: 'numeric', month: '2-digit' })}
        </p>
        <p className="modal">
            If you have any questions just email me at{' '}
            <span className="text-lg font-normal tracking-wide">englishwithfelicity@gmail.com</span>
        </p>
        <p className="modal">I look forward to learning with you!</p>
    </div>
);

export default BookingThanksPanel;
