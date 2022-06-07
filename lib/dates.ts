import { AvailableTime, BookedTime } from '../models/calendar';

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

const getTime = (hour: number) =>
    new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), hour, 0, 0));

const scheduleTimesLabel = () => [
    `- ${getTime(5).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`,
    '-',
    '-',
    `- ${getTime(8).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`,
    '-',
    '-',
    `- ${getTime(13).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`,
    '-',
    '-',
    `- ${getTime(16).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`,
    '-',
    '-',
];

const generateScheduleTimes = (date: string) => [
    new Date(`${date}T09:00:00.000Z`),
    new Date(`${date}T09:15:00.000Z`),
    new Date(`${date}T09:30:00.000Z`),
    new Date(`${date}T09:45:00.000Z`),
    new Date(`${date}T10:00:00.000Z`),
    new Date(`${date}T10:15:00.000Z`),
    new Date(`${date}T10:30:00.000Z`),
    new Date(`${date}T10:45:00.000Z`),
    new Date(`${date}T11:00:00.000Z`),
    new Date(`${date}T11:15:00.000Z`),
    new Date(`${date}T11:30:00.000Z`),
    new Date(`${date}T11:45:00.000Z`),
    new Date(`${date}T12:00:00.000Z`),
    new Date(`${date}T12:15:00.000Z`),
    new Date(`${date}T12:30:00.000Z`),
    new Date(`${date}T12:45:00.000Z`),
    new Date(`${date}T13:00:00.000Z`),
    new Date(`${date}T13:15:00.000Z`),
    new Date(`${date}T13:30:00.000Z`),
    new Date(`${date}T13:45:00.000Z`),
    new Date(`${date}T14:00:00.000Z`),
    new Date(`${date}T14:15:00.000Z`),
    new Date(`${date}T14:30:00.000Z`),
    new Date(`${date}T14:45:00.000Z`),
    new Date(`${date}T15:00:00.000Z`),
    new Date(`${date}T15:15:00.000Z`),
    new Date(`${date}T15:30:00.000Z`),
    new Date(`${date}T15:45:00.000Z`),
    new Date(`${date}T16:00:00.000Z`),
    new Date(`${date}T16:15:00.000Z`),
    new Date(`${date}T16:30:00.000Z`),
    new Date(`${date}T16:45:00.000Z`),
    new Date(`${date}T17:00:00.000Z`),
    new Date(`${date}T17:15:00.000Z`),
    new Date(`${date}T17:30:00.000Z`),
    new Date(`${date}T17:45:00.000Z`),
    new Date(`${date}T18:00:00.000Z`),
    new Date(`${date}T18:15:00.000Z`),
    new Date(`${date}T18:30:00.000Z`),
    new Date(`${date}T18:45:00.000Z`),
    new Date(`${date}T19:00:00.000Z`),
    new Date(`${date}T19:15:00.000Z`),
    new Date(`${date}T19:30:00.000Z`),
    new Date(`${date}T19:45:00.000Z`),
    new Date(`${date}T20:00:00.000Z`),
];

const getAvailableTimesAndBookings = () =>
    Promise.all([
        fetch('/api/available-times').then(res => res.json()),
        fetch('/api/current-bookings').then(res => res.json()),
    ]).then(results =>
        results.map(res =>
            res.map((item: BookedTime | AvailableTime) => ({
                ...item,
                start: new Date(item.start),
                end: new Date(item.end),
            })),
        ),
    );

export { getWeek, getCurrentDate, scheduleTimesLabel, getAvailableTimesAndBookings, generateScheduleTimes };
