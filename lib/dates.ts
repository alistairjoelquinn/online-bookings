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

const getTime = (dateVal, hours: number, minutes = 0, seconds = 0) =>
    new Date(
        Date.UTC(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate(), hours, minutes, seconds),
    ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

const getTimeComparisonArea = (day: string) => {
    console.log('day: ', day);
};

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

const generateScheduleTimes = (day: string) => {
    getTimeComparisonArea(day);

    return [];

    // return [
    //     getTime(5),
    //     getTime(5, 15),
    //     getTime(5, 30),
    //     getTime(5, 45),
    //     getTime(6),
    //     getTime(6, 15),
    //     getTime(6, 30),
    //     getTime(6, 45),
    //     getTime(7),
    //     getTime(7, 15),
    //     getTime(7, 30),
    //     getTime(7, 45),
    //     getTime(8),
    //     getTime(8, 15),
    //     getTime(8, 30),
    //     getTime(8, 45),
    //     getTime(9),
    //     getTime(9, 15),
    //     getTime(9, 30),
    //     getTime(9, 45),
    //     getTime(10),
    //     getTime(10, 15),
    //     getTime(10, 30),
    //     getTime(10, 45),
    //     getTime(11),
    //     getTime(11, 15),
    //     getTime(11, 30),
    //     getTime(11, 45),
    //     getTime(12),
    //     getTime(12, 15),
    //     getTime(12, 30),
    //     getTime(12, 45),
    //     getTime(13),
    //     getTime(13, 15),
    //     getTime(13, 30),
    //     getTime(13, 45),
    //     getTime(14),
    //     getTime(14, 15),
    //     getTime(14, 30),
    //     getTime(14, 45),
    //     getTime(15),
    //     getTime(15, 15),
    //     getTime(15, 30),
    //     getTime(15, 45),
    //     getTime(16),
    // ];
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
