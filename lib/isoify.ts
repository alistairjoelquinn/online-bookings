import { BookedTime } from '../models/calendar';

export default (booking: BookedTime) => {
    const startTime = `${booking.date}T${booking.start}`;
    const endTime = `${booking.date}T${booking.end}`;

    console.log('startTime: ', startTime);

    const startISO = new Date(startTime).toISOString();
    const endISO = new Date(endTime).toISOString();

    console.log('startISO: ', startISO);

    return {
        ...booking,
        start: startISO,
        end: endISO,
    };
};
