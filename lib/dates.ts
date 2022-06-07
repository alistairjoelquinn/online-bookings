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

const scheduleTimesLabel = (offset: number) => [
    `- ${9 + offset}:00`,
    '-',
    '-',
    `- ${12 + offset}:00`,
    '-',
    '-',
    `- ${15 + offset}:00`,
    '-',
    '-',
    `- ${18 + offset}:00`,
    '-',
    '-',
];

const generateScheduleTimes = (date: string) => {
    const offset = new Date().getTimezoneOffset() / 60;

    return [
        `${date}T${9 + offset > 9 ? 9 + offset : `0${9 + offset}`}:00:00.000Z`,
        `${date}T${9 + offset > 9 ? 9 + offset : `0${9 + offset}`}:15:00.000Z`,
        `${date}T${9 + offset > 9 ? 9 + offset : `0${9 + offset}`}:30:00.000Z`,
        `${date}T${9 + offset > 9 ? 9 + offset : `0${9 + offset}`}:45:00.000Z`,
        `${date}T${10 + offset > 9 ? 10 + offset : `0${10 + offset}`}:00:00.000Z`,
        `${date}T${10 + offset > 9 ? 10 + offset : `0${10 + offset}`}:15:00.000Z`,
        `${date}T${10 + offset > 9 ? 10 + offset : `0${10 + offset}`}:30:00.000Z`,
        `${date}T${10 + offset > 9 ? 10 + offset : `0${10 + offset}`}:45:00.000Z`,
        `${date}T${11 + offset > 9 ? 11 + offset : `0${11 + offset}`}:00:00.000Z`,
        `${date}T${11 + offset > 9 ? 11 + offset : `0${11 + offset}`}:15:00.000Z`,
        `${date}T${11 + offset > 9 ? 11 + offset : `0${11 + offset}`}:30:00.000Z`,
        `${date}T${11 + offset > 9 ? 11 + offset : `0${11 + offset}`}:45:00.000Z`,
        `${date}T${12 + offset > 9 ? 12 + offset : `0${12 + offset}`}:00:00.000Z`,
        `${date}T${12 + offset > 9 ? 12 + offset : `0${12 + offset}`}:15:00.000Z`,
        `${date}T${12 + offset > 9 ? 12 + offset : `0${12 + offset}`}:30:00.000Z`,
        `${date}T${12 + offset > 9 ? 12 + offset : `0${12 + offset}`}:45:00.000Z`,
        `${date}T${13 + offset > 9 ? 13 + offset : `0${13 + offset}`}:00:00.000Z`,
        `${date}T${13 + offset > 9 ? 13 + offset : `0${13 + offset}`}:15:00.000Z`,
        `${date}T${13 + offset > 9 ? 13 + offset : `0${13 + offset}`}:30:00.000Z`,
        `${date}T${13 + offset > 9 ? 13 + offset : `0${13 + offset}`}:45:00.000Z`,
        `${date}T${14 + offset > 9 ? 14 + offset : `0${14 + offset}`}:00:00.000Z`,
        `${date}T${14 + offset > 9 ? 14 + offset : `0${14 + offset}`}:15:00.000Z`,
        `${date}T${14 + offset > 9 ? 14 + offset : `0${14 + offset}`}:30:00.000Z`,
        `${date}T${14 + offset > 9 ? 14 + offset : `0${14 + offset}`}:45:00.000Z`,
        `${date}T${15 + offset > 9 ? 15 + offset : `0${15 + offset}`}:00:00.000Z`,
        `${date}T${15 + offset > 9 ? 15 + offset : `0${15 + offset}`}:15:00.000Z`,
        `${date}T${15 + offset > 9 ? 15 + offset : `0${15 + offset}`}:30:00.000Z`,
        `${date}T${15 + offset > 9 ? 15 + offset : `0${15 + offset}`}:45:00.000Z`,
        `${date}T${16 + offset > 9 ? 16 + offset : `0${16 + offset}`}:00:00.000Z`,
        `${date}T${16 + offset > 9 ? 16 + offset : `0${16 + offset}`}:15:00.000Z`,
        `${date}T${16 + offset > 9 ? 16 + offset : `0${16 + offset}`}:30:00.000Z`,
        `${date}T${16 + offset > 9 ? 16 + offset : `0${16 + offset}`}:45:00.000Z`,
        `${date}T${17 + offset > 9 ? 17 + offset : `0${17 + offset}`}:00:00.000Z`,
        `${date}T${17 + offset > 9 ? 17 + offset : `0${17 + offset}`}:15:00.000Z`,
        `${date}T${17 + offset > 9 ? 17 + offset : `0${17 + offset}`}:30:00.000Z`,
        `${date}T${17 + offset > 9 ? 17 + offset : `0${17 + offset}`}:45:00.000Z`,
        `${date}T${18 + offset > 9 ? 18 + offset : `0${18 + offset}`}:00:00.000Z`,
        `${date}T${18 + offset > 9 ? 18 + offset : `0${18 + offset}`}:15:00.000Z`,
        `${date}T${18 + offset > 9 ? 18 + offset : `0${18 + offset}`}:30:00.000Z`,
        `${date}T${18 + offset > 9 ? 18 + offset : `0${18 + offset}`}:45:00.000Z`,
        `${date}T${19 + offset > 9 ? 19 + offset : `0${19 + offset}`}:00:00.000Z`,
        `${date}T${19 + offset > 9 ? 19 + offset : `0${19 + offset}`}:15:00.000Z`,
        `${date}T${19 + offset > 9 ? 19 + offset : `0${19 + offset}`}:30:00.000Z`,
        `${date}T${19 + offset > 9 ? 19 + offset : `0${19 + offset}`}:45:00.000Z`,
    ];
};

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
