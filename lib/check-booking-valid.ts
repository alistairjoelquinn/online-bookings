import { AvailableTime, BookedTime } from '../models/calendar';

export const checkBookingValid = (data: BookedTime, available: AvailableTime[]) => {
    const start = new Date(`${data.date}T${data.start}`);
    const end = new Date(`${data.date}T${data.end}`);

    console.log('start, end: ', start, end);

    const result = available.some(x => {
        console.log('x', x);
        console.log('start >= new Date(x.start): ', start >= new Date(x.start));
        console.log('end >= new Date(x.end): ', end >= new Date(x.end));
        return start >= new Date(x.start) && end <= new Date(x.end);
    });

    console.log('result: ', result);

    return result;
};
