import { BookedTime } from '../models/calendar';
import { emailRegex, nameRegex } from './validation-regex';

export function validateIncomingValues(booking: BookedTime) {
    let error;

    const n = booking.name.match(nameRegex);
    const e = booking.email.match(emailRegex);

    if (!n) {
        error = `Oops, there's a problem with the name`;
    } else if (n && n[0] !== booking.name) {
        error = `Oops, there's a problem with the name`;
    } else if (!e) {
        error = `Oops, there's a problem with the email`;
    } else if (e && e[0] !== booking.email) {
        error = `Oops, there's a problem with the email`;
    } else if (!booking.start || !booking.end || !booking.type || !booking.date) {
        error = 'Remember to fill out all the fields...';
    }

    return error;
}
