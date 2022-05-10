import { useMemo, useState } from 'react';
import getWeek from '../lib/getWeek';
import { FormattedDate } from '../models/calendar';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(() =>
        new Date().toLocaleDateString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric' }),
    );
    const week = useMemo<FormattedDate[] | null>(() => getWeek(selectedDate), [selectedDate]);

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedDate(e.target.value);

    return (
        <section className="dark:text-gray-100">
            <h1>Calendar page</h1>
            <div className="flex flex-col">
                <span>Select date:</span>
                <input type="date" onChange={dateChangeHandler} />
            </div>
            {week && (
                <div>
                    {week.map((day, i) => (
                        <div key={day.id}>{day.id}</div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Calendar;
