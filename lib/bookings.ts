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

enum SlotStatus {
  OpenSlot = 'open-slot',
  Available = 'available',
  Booked = 'booked',
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

  let currentStatus: SlotStatus = SlotStatus.OpenSlot;
  let nextStatus: SlotStatus = SlotStatus.OpenSlot;

  const currentTime = new Date(time);

  bookingData?.[0].forEach((item: AvailableTime) => {
    if (
      currentTime >= new Date(item.start) &&
      currentTime < new Date(item.end)
    ) {
      currentStatus = SlotStatus.Available;
    }
  });

  bookingData?.[1].forEach((item: AvailableTime) => {
    if (
      currentTime >= new Date(item.start) &&
      currentTime < new Date(item.end)
    ) {
      currentStatus = SlotStatus.Booked;
    }
  });

  bookingData?.[0].forEach((item: AvailableTime) => {
    if (
      new Date(nextSlot) >= new Date(item.start) &&
      new Date(nextSlot) < new Date(item.end)
    ) {
      nextStatus = SlotStatus.Available;
    }
  });

  bookingData?.[1].forEach((item: AvailableTime) => {
    if (
      new Date(nextSlot) >= new Date(item.start) &&
      new Date(nextSlot) < new Date(item.end)
    ) {
      nextStatus = SlotStatus.Booked;
    }
  });

  let closingBlockFormat;

  if (
    (currentStatus === SlotStatus.Available &&
      nextStatus === SlotStatus.Booked) ||
    (currentStatus === SlotStatus.Available &&
      nextStatus === SlotStatus.OpenSlot) ||
    (currentStatus === SlotStatus.Booked &&
      nextStatus === SlotStatus.Available) ||
    (currentStatus === SlotStatus.Booked && nextStatus === SlotStatus.OpenSlot)
  ) {
    closingBlockFormat = 'end';
  }
  if (
    (currentStatus === SlotStatus.Available &&
      nextStatus === SlotStatus.Available) ||
    (currentStatus === SlotStatus.Booked && nextStatus === SlotStatus.Booked)
  ) {
    closingBlockFormat = 'block-center';
  }

  return [currentStatus, closingBlockFormat];
}
