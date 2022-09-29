import { AvailableTime, BookedTime } from '../models/calendar';

export default function handler(time: BookedTime | AvailableTime) {
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
