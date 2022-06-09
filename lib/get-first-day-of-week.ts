export default () => {
    const date = new Date();
    const day = date.getDay();
    if (day !== 0) {
        date.setHours(-24 * day);
    }
    return date;
};
