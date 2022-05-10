import { useMemo, useState } from 'react';
import getWeek from '../lib/getWeek';
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

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedDate(e.target.value);

    return (
        <section className="relative z-10 pt-5 dark:text-gray-100 md:pt-16">
            <div className="flex flex-row">
                <span>Select date:</span>
                <input
                    type="date"
                    onChange={dateChangeHandler}
                    className="rounded-lg border-2 border-purple-300 bg-white px-5 py-3 text-black shadow-md "
                />
            </div>
            {week && (
                <div className="grid h-80 grid-cols-7 gap-2">
                    {week.map((day, i) => (
                        <div key={day.id}>
                            <h1 className="py-3 text-center">{day.value}</h1>
                            <div
                                className={`flex w-24 flex-col justify-between gap-4 rounded-lg ${
                                    day.id === selectedDate
                                        ? 'ring-2 ring-yellow-300 ring-opacity-75 ring-offset-2'
                                        : ''
                                }`}
                            >
                                <div className="calendar-day" onClick={() => setSelectedDate(day.id)}>
                                    10am
                                </div>
                                <div className="calendar-day" onClick={() => setSelectedDate(day.id)}>
                                    1pm
                                </div>
                                <div className="calendar-day" onClick={() => setSelectedDate(day.id)}>
                                    4pm
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Calendar;
