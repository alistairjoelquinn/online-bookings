import { BookedTime } from '../models/calendar';

export default (data: BookedTime, booked: BookedTime[]) => {
    const start = new Date(`${data.date}T${data.start}`);
    const end = new Date(`${data.date}T${data.end}`);

    return booked.some(
        x =>
            (start >= new Date(x.start) && start <= new Date(x.end)) ||
            (end >= new Date(x.start) && end <= new Date(x.end)),
    );
};
