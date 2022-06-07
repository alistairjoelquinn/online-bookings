import { AvailableTime } from '../models/calendar';
import { generateScheduleTimes } from './dates';

export const checkSlot = (time: Date, bookingData: any, dayId: string, index: number) => {
    // console.log('arguments: ', time, bookingData, dayId);
    const dayTimeArray = generateScheduleTimes(dayId);
    // console.log('dayTimeArray: ', dayTimeArray);

    const nextSlot = dayTimeArray[index + 1];

    let currentStatus = 'open-slot';
    let nextStatus = 'open-slot';

    bookingData?.[0].forEach((item: AvailableTime) => {
        if (time >= new Date(item.start) && time < new Date(item.end)) {
            currentStatus = 'available';
        }
    });

    bookingData?.[1].forEach((item: AvailableTime) => {
        if (time >= new Date(item.start) && time < new Date(item.end)) {
            currentStatus = 'booked';
        }
    });

    bookingData?.[0].forEach((item: AvailableTime) => {
        if (new Date(nextSlot) >= new Date(item.start) && new Date(nextSlot) < new Date(item.end)) {
            nextStatus = 'available';
        }
    });

    bookingData?.[1].forEach((item: AvailableTime) => {
        if (new Date(nextSlot) >= new Date(item.start) && new Date(nextSlot) < new Date(item.end)) {
            nextStatus = 'booked';
        }
    });

    let closingBlockFormat;

    if (
        (currentStatus === 'available' && nextStatus === 'booked') ||
        (currentStatus === 'available' && nextStatus === 'open-slot') ||
        (currentStatus === 'booked' && nextStatus === 'available') ||
        (currentStatus === 'booked' && nextStatus === 'open-slot')
    ) {
        closingBlockFormat = 'end';
    }
    if (
        (currentStatus === 'available' && nextStatus === 'available') ||
        (currentStatus === 'booked' && nextStatus === 'booked')
    ) {
        closingBlockFormat = 'block-center';
    }

    return [currentStatus, closingBlockFormat];
};
