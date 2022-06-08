import { AvailableTime, BookedTime } from '../models/calendar';

export const checkBookingValid = (data: BookedTime, available: AvailableTime[]) =>
    available.some(x => data.start >= x.start && data.end <= x.end);
