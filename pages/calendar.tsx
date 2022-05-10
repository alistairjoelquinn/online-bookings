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
        <section className="dark:text-gray-100 lg:max-w-xl">
            <h1>Calendar page</h1>
            <div className="flex flex-col pb-3">
                <span>Select date:</span>
                <input type="date" onChange={dateChangeHandler} />
            </div>
            {week && (
                <div className="grid h-80 grid-cols-7 gap-2">
                    {week.map((day, i) => (
                        <div
                            className={`flex w-20 flex-col justify-between gap-2 ${
                                day.id === selectedDate ? 'ring-2 ring-purple-800 ring-opacity-50' : ''
                            }`}
                            key={day.id}
                        >
                            <div className="h-24 rounded-lg bg-purple-400">10am</div>
                            <div className="h-24 rounded-lg bg-purple-400">1pm</div>
                            <div className="h-24 rounded-lg bg-purple-400">4pm</div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Calendar;
