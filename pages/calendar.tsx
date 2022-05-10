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
            <div className="flex flex-col">
                <span>Select date:</span>
                <input type="date" onChange={dateChangeHandler} />
            </div>
            {week && (
                <div className="grid h-80 grid-cols-7 gap-2">
                    {week.map((day, i) => (
                        <div key={day.id}>
                            <h1 className="py-3">{day.value}</h1>
                            <div
                                className={`flex w-24 flex-col justify-between gap-4 rounded-lg ${
                                    day.id === selectedDate
                                        ? 'ring-2 ring-yellow-300 ring-opacity-75 ring-offset-2'
                                        : ''
                                }`}
                            >
                                <div className="input">10am</div>
                                <div className="input">1pm</div>
                                <div className="input">4pm</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Calendar;
