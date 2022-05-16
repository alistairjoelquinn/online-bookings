import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import {
    getWeek,
    getCurrentDate,
    scheduleTimesLabel,
    getInitialAvailableTimes,
    generateScheduleTimes,
} from '../lib/dates';
import { AvailableTime, FormattedDate } from '../models/calendar';

const checkSlot = (time: string, bookingData: any, dayId: string, index: number) => {
    const timeArray = generateScheduleTimes(dayId);

    const prevSlot = timeArray[index - 1];

    let prevSlotStatus = 'open-slot';
    let currentStatus = 'open-slot';

    // let open = true;
    bookingData?.[0].forEach((item: AvailableTime) => {
        if (new Date(prevSlot) >= new Date(item.start) && new Date(prevSlot) <= new Date(item.end)) {
            prevSlotStatus = 'available';
        }
    });
    bookingData?.[1].forEach((item: AvailableTime) => {
        if (new Date(prevSlot) >= new Date(item.start) && new Date(prevSlot) <= new Date(item.end)) {
            prevSlotStatus = 'booked';
        }
    });

    bookingData?.[0].forEach((item: AvailableTime) => {
        if (new Date(time) >= new Date(item.start) && new Date(time) <= new Date(item.end)) {
            currentStatus = 'available';
        }
    });
    bookingData?.[1].forEach((item: AvailableTime) => {
        if (new Date(time) >= new Date(item.start) && new Date(time) <= new Date(item.end)) {
            currentStatus = 'booked';
        }
    });

    let returnValue = '';
    console.log('prevSlotStatus: ', prevSlotStatus);
    console.log('currentStatus: ', currentStatus);

    if (prevSlotStatus === 'open-slot' && currentStatus === 'available') {
        returnValue = 'open-section';
    }
    if (prevSlotStatus === 'open-slot' && currentStatus === 'booked') {
        returnValue = 'open-section';
    }

    if (prevSlotStatus === 'available' && currentStatus === 'booked') {
        returnValue = 'open-section';
    }
    if (prevSlotStatus === 'booked' && currentStatus === 'available') {
        returnValue = 'open-section';
    }

    return returnValue;
};

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(getCurrentDate);
    const week = useMemo<FormattedDate[] | null>(() => getWeek(selectedDate), [selectedDate]);

    const { status, data: bookingData } = useQuery('initial-available-times', getInitialAvailableTimes);

    console.log('bookingData: ', bookingData);

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    if (status === 'loading' || !week) return <div className="spin" />;
    if (status === 'error') return <span>Oops, something unexpected went wrong!</span>;

    return (
        <section className="relative z-10 pt-5 dark:text-gray-100 md:pt-16">
            <div className="flex flex-row">
                <span className="text-md py-3 pr-5 font-extrabold dark:text-gray-100 md:text-2xl lg:text-3xl">
                    Select a date:
                </span>
                <input value={selectedDate} type="date" onChange={dateChangeHandler} className="input" />
            </div>
            {week && (
                <div className="grid grid-cols-5 gap-4">
                    {week.map(day => (
                        <div key={day.id}>
                            <h1 className="py-3 text-center">{day.value}</h1>
                            <div
                                onClick={() => setSelectedDate(day.id)}
                                className={`relative z-10 flex h-full w-36 flex-col justify-between rounded-lg border-2 border-purple-300 bg-white py-2 px-1 text-xs shadow-md ${
                                    day.id === selectedDate
                                        ? 'ring-2 ring-yellow-300 ring-opacity-75 ring-offset-2 dark:ring-offset-gray-900'
                                        : ''
                                }`}
                            >
                                <div className="absolute top-0 left-0 my-4 h-full w-full px-1">
                                    {generateScheduleTimes(day.id).map((time, i) => (
                                        // console.log('time: ', time);
                                        <div
                                            id="booking"
                                            key={time}
                                            className={`${checkSlot(
                                                time,
                                                bookingData,
                                                day.id,
                                                i,
                                            )} h-2 ${bookingData?.[0]
                                                .map(
                                                    (item: AvailableTime) =>
                                                        new Date(time) >= new Date(item.start) &&
                                                        new Date(time) <= new Date(item.end) &&
                                                        'bg-blue-400',
                                                )
                                                .filter(Boolean)}${bookingData?.[1]
                                                .map(
                                                    (item: AvailableTime) =>
                                                        new Date(time) >= new Date(item.start) &&
                                                        new Date(time) < new Date(item.end) &&
                                                        ' bg-yellow-400',
                                                )
                                                .filter(Boolean)}`}
                                        />
                                    ))}
                                </div>
                                {scheduleTimesLabel.map((time: string, i: number) => (
                                    <span className="relative z-20 bg-transparent pb-3 text-gray-600" key={time + i}>
                                        {time}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Calendar;
