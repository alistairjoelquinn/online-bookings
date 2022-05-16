import { useMemo, useState } from 'react';

import getWeek from '../lib/getWeek';
import { scheduleTimes } from '../lib/times';
import { FormattedDate } from '../models/calendar';

const getCurrentDate = () =>
    new Date()
        .toLocaleDateString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric' })
        .split('/')
        .reverse()
        .join('/');

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(getCurrentDate);
    const week = useMemo<FormattedDate[] | null>(() => getWeek(selectedDate), [selectedDate]);

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value.split('-').join('/'));
    };

    return (
        <section className="relative z-10 pt-5 dark:text-gray-100 md:pt-16">
            <div className="flex flex-row">
                <span className="text-md py-3 pr-5 font-extrabold dark:text-gray-100 md:text-2xl lg:text-3xl">
                    Select a date:
                </span>
                <input
                    value={selectedDate}
                    type="date"
                    onChange={dateChangeHandler}
                    className="rounded-lg border-2 border-purple-300 bg-white px-5 py-3 text-black shadow-md "
                />
            </div>
            {week && (
                <div className="grid h-96 grid-cols-7 gap-4">
                    {week.map(day => (
                        <div key={day.id}>
                            <h1 className="py-3 text-center">{day.value}</h1>
                            <div
                                onClick={() => setSelectedDate(day.id)}
                                className={`calendar-day flex w-24 flex-col justify-between gap-4 rounded-lg p-1 text-gray-400 ${
                                    day.id === selectedDate
                                        ? 'ring-2 ring-yellow-300 ring-opacity-75 ring-offset-2 dark:ring-offset-gray-900'
                                        : ''
                                }`}
                            >
                                {scheduleTimes.map((time: string) => (
                                    <span key={time}>{time}</span>
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
