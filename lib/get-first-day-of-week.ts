export const getFirstDayOfWeek = (date: Date) => {
    const day = date.getDay();
    if (day !== 0) {
        date.setHours(-24 * day);
    }
    return date;
};
