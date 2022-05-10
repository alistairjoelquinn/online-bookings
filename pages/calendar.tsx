import { useState } from 'react';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    console.log('selectedDate: ', selectedDate);

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedDate(e.target.value);

    return (
        <>
            <h1>Calendar page</h1>
            <div className="flex">
                <span>Select date:</span>
                <input type="date" onChange={dateChangeHandler} />
            </div>
        </>
    );
};

export default Calendar;
