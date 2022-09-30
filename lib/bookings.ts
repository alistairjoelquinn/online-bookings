import { generateScheduleTimes } from 'lib/dates';
import { AvailableTime, BookedTime } from 'models/calendar';

export function checkNoBookingClash(data: BookedTime, booked: BookedTime[]) {
  const start = new Date(`${data.date}T${data.start}`);
  const end = new Date(`${data.date}T${data.end}`);

  return booked.some(
    x =>
      (start >= new Date(x.start) && start <= new Date(x.end)) ||
      (end >= new Date(x.start) && end <= new Date(x.end)) ||
      (start <= new Date(x.start) && end >= new Date(x.end)),
  );
}

export function checkBookingAvailable(
  data: BookedTime,
  available: AvailableTime[],
) {
  const start = new Date(`${data.date}T${data.start}`);
  const end = new Date(`${data.date}T${data.end}`);

  return available.some(
    x => start >= new Date(x.start) && end <= new Date(x.end),
  );
}

export function checkSlot(
  time: Date,
  bookingData: any,
  dayId: string,
  index: number,
) {
  const dayTimeArray = generateScheduleTimes(dayId);

  const nextSlot = dayTimeArray[index + 1];

  let currentStatus = 'open-slot';
  let nextStatus = 'open-slot';

  const currentTime = new Date(time);

  bookingData?.[0].forEach((item: AvailableTime) => {
    if (
      currentTime >= new Date(item.start) &&
      currentTime < new Date(item.end)
    ) {
      currentStatus = 'available';
    }
  });

  bookingData?.[1].forEach((item: AvailableTime) => {
    if (
      currentTime >= new Date(item.start) &&
      currentTime < new Date(item.end)
    ) {
      currentStatus = 'booked';
    }
  });

  bookingData?.[0].forEach((item: AvailableTime) => {
    if (
      new Date(nextSlot) >= new Date(item.start) &&
      new Date(nextSlot) < new Date(item.end)
    ) {
      nextStatus = 'available';
    }
  });

  bookingData?.[1].forEach((item: AvailableTime) => {
    if (
      new Date(nextSlot) >= new Date(item.start) &&
      new Date(nextSlot) < new Date(item.end)
    ) {
      nextStatus = 'booked';
    }
  });

  let closingBlockFormat;

  if (
    (currentStatus === 'available' && nextStatus === 'booked') ||
    (currentStatus === 'available' && nextStatus === 'open-slot') ||
    (currentStatus === 'booked' && nextStatus === 'available') ||
    (currentStatus === 'booked' && nextStatus === 'open-slot')
  ) {
    closingBlockFormat = 'end';
  }
  if (
    (currentStatus === 'available' && nextStatus === 'available') ||
    (currentStatus === 'booked' && nextStatus === 'booked')
  ) {
    closingBlockFormat = 'block-center';
  }

  return [currentStatus, closingBlockFormat];
}
