import { AvailableTime, BookedTime } from '../models/calendar';

export default (data: BookedTime, available: AvailableTime[]) => {
    const start = new Date(`${data.date}T${data.start}`);
    const end = new Date(`${data.date}T${data.end}`);

    return available.some(x => start >= new Date(x.start) && end <= new Date(x.end));
};
