import { BookedTime } from '../models/calendar';

export default (booking: BookedTime) => {
    const startTime = `${booking.date}T${booking.start}`;
    const endTime = `${booking.date}T${booking.end}`;

    const startISO = new Date(startTime).toISOString();
    const endISO = new Date(endTime).toISOString();

    return {
        ...booking,
        start: startISO,
        end: endISO,
    };
};
