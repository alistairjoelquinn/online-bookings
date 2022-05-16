const getWeek = (date: string) => {
    if (!date) return null;

    const currentDate = new Date(date);
    const currentDay = currentDate.getDay();

    const days: (Date | undefined)[] = Array(7).fill(null);

    days[currentDay] = currentDate;

    const dateValues = days.map((day, i) => {
        if (day) return day;

        const dayVal = i > currentDay ? -i + currentDay : currentDay - i;

        const weekDayDate = currentDate.getDate() - dayVal;
        const dateSet = new Date(new Date(currentDate).setDate(weekDayDate));

        return dateSet;
    });

    return dateValues
        .map(dateValue => ({
            id: dateValue
                .toLocaleDateString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric' })
                .split('/')
                .reverse()
                .join('-'),
            value: dateValue.toLocaleDateString('en-uk', { weekday: 'short', day: 'numeric', month: '2-digit' }),
        }))
        .slice(1, -1);
};

const getCurrentDate = () =>
    new Date()
        .toLocaleDateString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric' })
        .split('/')
        .reverse()
        .join('-');

const scheduleTimes = ['- 07:00am', '-', '-', '- 10:00am', '-', '-', '- 01:00pm', '-', '-', '- 04:00pm', '-', '-'];

const getInitialAvailableTimes = () => fetch('/initial-available-times').then(res => res.json);

export { getWeek, getCurrentDate, scheduleTimes, getInitialAvailableTimes };
