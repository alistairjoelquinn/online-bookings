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

const getTime = (dateVal: Date, hours: number, minutes = 0, seconds = 0) =>
    new Date(
        Date.UTC(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate(), hours, minutes, seconds),
    ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

const scheduleTimesLabel = (currentDate: Date) => [
    `- ${getTime(currentDate, 5)}`,
    '-',
    '-',
    `- ${getTime(currentDate, 8)}`,
    '-',
    '-',
    `- ${getTime(currentDate, 13)}`,
    '-',
    '-',
    `- ${getTime(currentDate, 16)}`,
    '-',
    '-',
];

const generateScheduleTimes = (date: string) => [
    `${date}T05:00:00.000Z`,
    `${date}T05:15:00.000Z`,
    `${date}T05:30:00.000Z`,
    `${date}T05:45:00.000Z`,
    `${date}T06:00:00.000Z`,
    `${date}T06:15:00.000Z`,
    `${date}T06:30:00.000Z`,
    `${date}T06:45:00.000Z`,
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
