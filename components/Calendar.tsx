import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { checkSlot } from '../lib/check-calendar-slot';

import {
    getWeek,
    getCurrentDate,
    scheduleTimesLabel,
    getInitialAvailableTimes,
    generateScheduleTimes,
} from '../lib/dates';
import { AvailableTime, FormattedDate } from '../models/calendar';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(getCurrentDate);
    const week = useMemo<FormattedDate[] | null>(() => getWeek(selectedDate), [selectedDate]);

    // const { status, data: bookingData } = useQuery('initial-available-times', getInitialAvailableTimes);

    const status = 'error';

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    if (status === 'loading' || !week) return <div className="spin" />;
    if (status === 'error')
        return (
            <span className=" relative z-10 flex p-5 font-lora text-2xl dark:text-gray-100 md:mr-6 md:pt-16">
                Oops, something unexpected went wrong!
            </span>
        );

    return (
        <section className="relative z-10 p-5 dark:text-gray-100 md:mr-6 md:pt-16">
            <div className="flex flex-row">
                <span className="text-md py-3 pr-5 font-extrabold dark:text-gray-100 md:text-2xl lg:text-3xl">
                    Select a date:
                </span>
                <input value={selectedDate} type="date" onChange={dateChangeHandler} className="input" />
            </div>
            {week && (
                <div className="grid grid-cols-5 gap-4">
                    {week.map(day => (
                        <div className="flex flex-col items-center" key={day.id}>
                            <h1 className="py-3 text-center text-sm sm:text-lg md:text-sm lg:text-lg">{day.value}</h1>
                            <div
                                onClick={() => setSelectedDate(day.id)}
                                className={`relative z-10 flex h-full w-20 flex-col justify-between rounded-lg border-2 border-purple-300 bg-white py-2 px-1 text-xs shadow-md sm:w-28 md:w-20 lg:w-28 xl:w-36 ${
                                    day.id === selectedDate
                                        ? 'ring-2 ring-yellow-300 ring-opacity-75 ring-offset-2 dark:ring-offset-gray-900'
                                        : ''
                                }`}
                            >
                                <div className="absolute top-0 left-0 my-4 h-full w-full px-1">
                                    {generateScheduleTimes(day.id).map((time, i) => (
                                        <div
                                            key={time}
                                            className={`${checkSlot(time, bookingData, day.id, i).join(
                                                ' ',
                                            )} h-2 ${bookingData?.[0]
                                                .map(
                                                    (item: AvailableTime) =>
                                                        new Date(time) >= new Date(item.start) &&
                                                        new Date(time) < new Date(item.end) &&
                                                        'bg-green-300',
                                                )
                                                .filter(Boolean)}${bookingData?.[1]
                                                .map(
                                                    (item: AvailableTime) =>
                                                        new Date(time) >= new Date(item.start) &&
                                                        new Date(time) < new Date(item.end) &&
                                                        ' bg-purple-200',
                                                )
                                                .filter(Boolean)}`}
                                        />
                                    ))}
                                </div>
                                {scheduleTimesLabel.map((time: string, i: number) => (
                                    <span className="relative z-20 h-8 bg-transparent text-gray-600" key={time + i}>
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
