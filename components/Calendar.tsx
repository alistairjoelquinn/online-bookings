import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { getWeek, getCurrentDate, scheduleTimes, getInitialAvailableTimes } from '../lib/dates';
import { FormattedDate } from '../models/calendar';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(getCurrentDate);
    const week = useMemo<FormattedDate[] | null>(() => getWeek(selectedDate), [selectedDate]);

    const { status, data } = useQuery('initial-available-times', getInitialAvailableTimes);

    console.log('data: ', data);

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    if (status === 'loading') return <div className="spin" />;
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
                                className={`flex h-full w-36 flex-col justify-between rounded-lg border-2 border-purple-300 bg-white py-2 px-1 text-xs shadow-md ${
                                    day.id === selectedDate
                                        ? 'ring-2 ring-yellow-300 ring-opacity-75 ring-offset-2 dark:ring-offset-gray-900'
                                        : ''
                                }`}
                            >
                                {scheduleTimes.map((time: string, i: number) => (
                                    <span className="pb-3 text-gray-600 dark:text-gray-400" key={time + i}>
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
