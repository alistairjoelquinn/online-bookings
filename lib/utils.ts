import { AvailableTime, BookedTime } from 'models/calendar';

/**
 * Accepts a string as a parameter and immediately writes that string to the
 * clipboard.
 */
export function writeTextToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

/**
 * Updates the class which switches the dark mode setting between light and dark
 */
export function updateDarkModePreference() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
}

/**
 * Returns the event handlers for creating the hover effect on an icon.
 */
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

/**
 * Accepts an object as a parameter and returns the same object excpet with the
 * start and end times converted to ISO time strings.
 */
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
