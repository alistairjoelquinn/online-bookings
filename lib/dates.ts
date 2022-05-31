const getWeek = (date: string) => {
    if (!date) return null;

    const currentDate = new Date(date);
    const currentDay = currentDate.getDay();

    const days: (Date | undefined)[] = Array(7).fill(null);

    days[currentDay] = currentDate;

    const dateValues = days.map((day, i) => {
        if (day) return day;

        const dayVal = currentDay - i;

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

const scheduleTimesLabel = (offset: number) => [
    `- ${5 - offset}:00`,
    '-',
    '-',
    `- ${8 - offset}:00`,
    '-',
    '-',
    `- ${11 - offset}:00`,
    '-',
    '-',
    `- ${2 - offset}:00`,
    '-',
    '-',
];

const generateScheduleTimes = (date: string) => [
    `${date}T07:00:00.000Z`,
    `${date}T07:15:00.000Z`,
    `${date}T07:30:00.000Z`,
    `${date}T07:45:00.000Z`,
    `${date}T08:00:00.000Z`,
    `${date}T08:15:00.000Z`,
    `${date}T08:30:00.000Z`,
    `${date}T08:45:00.000Z`,
    `${date}T09:00:00.000Z`,
    `${date}T09:15:00.000Z`,
    `${date}T09:30:00.000Z`,
    `${date}T09:45:00.000Z`,
    `${date}T10:00:00.000Z`,
    `${date}T10:15:00.000Z`,
    `${date}T10:30:00.000Z`,
    `${date}T10:45:00.000Z`,
    `${date}T11:00:00.000Z`,
    `${date}T11:15:00.000Z`,
    `${date}T11:30:00.000Z`,
    `${date}T11:45:00.000Z`,
    `${date}T12:00:00.000Z`,
    `${date}T12:15:00.000Z`,
    `${date}T12:30:00.000Z`,
    `${date}T12:45:00.000Z`,
    `${date}T13:00:00.000Z`,
    `${date}T13:15:00.000Z`,
    `${date}T13:30:00.000Z`,
    `${date}T13:45:00.000Z`,
    `${date}T14:00:00.000Z`,
    `${date}T14:15:00.000Z`,
    `${date}T14:30:00.000Z`,
    `${date}T14:45:00.000Z`,
    `${date}T15:00:00.000Z`,
    `${date}T15:15:00.000Z`,
    `${date}T15:30:00.000Z`,
    `${date}T15:45:00.000Z`,
    `${date}T16:00:00.000Z`,
    `${date}T16:15:00.000Z`,
    `${date}T16:30:00.000Z`,
    `${date}T16:45:00.000Z`,
    `${date}T17:00:00.000Z`,
    `${date}T17:15:00.000Z`,
    `${date}T17:30:00.000Z`,
    `${date}T17:45:00.000Z`,
    `${date}T18:00:00.000Z`,
];

const getAvailableTimesAndBookings = () =>
    Promise.all([
        fetch('/api/available-times').then(res => res.json()),
        fetch('/api/current-bookings').then(res => res.json()),
    ]);

export { getWeek, getCurrentDate, scheduleTimesLabel, getAvailableTimesAndBookings, generateScheduleTimes };
