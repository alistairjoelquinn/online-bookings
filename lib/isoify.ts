import { BookingData } from '../components/ModalBookings';

export default (booking: BookingData) => {
    const startTime = `${booking.date}T${booking.start}`;
    const endTime = `${booking.date}T${booking.end}`;

    const startISO = new Date(startTime).toISOString();
    const endISO = new Date(endTime).toISOString();

    console.log('startISO: ', startISO);
    console.log('endISO: ', endISO);

    return booking;
};
