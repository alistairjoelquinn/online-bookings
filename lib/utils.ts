import { emailRegex, nameRegex } from 'lib/validation-regex';
import { AvailableTime, BookedTime } from 'models/calendar';

export function writeTextToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function updateDarkModePreference() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
}

export function validateFormValues(booking: BookedTime) {
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

export function iconHoverEventHandlers() {
  return {
    onMouseOver: (e: any) => {
      if (document.documentElement.classList.contains('dark')) {
        e.currentTarget.children[0].style.stroke = 'white';
      } else {
        e.currentTarget.children[0].style.stroke = 'black';
      }
    },
    onMouseOut: (e: any) => {
      e.currentTarget.children[0].style.stroke = '';
    },
  };
}

export function isoify(time: BookedTime | AvailableTime) {
  const startTime = `${time.date}T${time.start}`;
  const endTime = `${time.date}T${time.end}`;

  const startISO = new Date(startTime).toISOString();
  const endISO = new Date(endTime).toISOString();

  const update = {
    ...time,
    start: startISO,
    end: endISO,
  };

  return update;
}
