import ModalBookings from 'components/ModalBookings';
import ModalInfo from 'components/ModalInfo';
import { Add, CircleInformation } from 'grommet-icons';
import { checkSlot } from 'lib/bookings';
import {
  generateScheduleTimes,
  getCurrentDate,
  getUpcomingTimesAndBookings,
  getWeek,
  scheduleTimesLabel,
} from 'lib/dates';
import { iconHoverEventHandlers } from 'lib/utils';
import { AvailableTime, FormattedDate } from 'models/calendar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(getCurrentDate);
  const [infoWindowIsVisible, setInfoWindowIsVisible] = useState(false);
  const [bookingsWindowIsVisible, setBookingsWindowIsVisible] = useState(false);
  const [currentDate] = useState(new Date());
  const week = useMemo<FormattedDate[] | null>(
    () => getWeek(selectedDate),
    [selectedDate],
  );
  const router = useRouter();

  const { status, data: bookingData } = useQuery(
    'get-upcoming-times-and-bookings',
    getUpcomingTimesAndBookings,
  );

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSelectedDate(e.target.value);
    } else {
      setSelectedDate(getCurrentDate());
    }
  };

  useEffect(() => {
    if (router.query.login) {
      router.replace('/bookings');
    }
  }, [router]);

  if (status === 'loading' || !week) return <div className="spin" />;
  if (status === 'error')
    return (
      <div className="relative z-10 flex flex-col p-5 text-2xl dark:text-gray-100 md:mr-6 md:pt-16">
        <p className="mb-4 font-lora">Oops, something unexpected went wrong!</p>
        <Link href="/" passHref>
          <button type="button" className="btn mr-5 mb-5 w-56 md:mb-0">
            Back To Safety
          </button>
        </Link>
      </div>
    );

  return (
    <section className="relative z-10 animate-reveal p-5 dark:text-gray-100 md:mr-6 md:pt-16">
      <div className="flex flex-row justify-between">
        <span className="text-md py-3 pr-5 font-extrabold dark:text-gray-100 md:text-2xl lg:text-3xl">
          Select a date:
        </span>
        <input
          value={selectedDate}
          type="date"
          onChange={dateChangeHandler}
          className="input flex-grow"
        />
        <div className="flex items-center justify-evenly gap-10 py-1 pl-5">
          <CircleInformation
            onClick={() => setInfoWindowIsVisible(true)}
            {...iconHoverEventHandlers()}
            cursor="pointer"
          />
          <Add
            onClick={() => setBookingsWindowIsVisible(true)}
            {...iconHoverEventHandlers()}
            cursor="pointer"
          />
        </div>
      </div>
      {infoWindowIsVisible && <ModalInfo closeModal={setInfoWindowIsVisible} />}
      {bookingsWindowIsVisible && (
        <ModalBookings
          date={selectedDate}
          closeModal={setBookingsWindowIsVisible}
          available={bookingData?.[0]}
          booked={bookingData?.[1]}
        />
      )}
      {week && (
        <div className="grid grid-cols-5 gap-4">
          {week.map(day => (
            <div className="flex flex-col items-center" key={day.id}>
              <h1 className="py-3 text-center text-sm sm:text-lg md:text-sm lg:text-lg">
                {day.value}
              </h1>
              <div
                onClick={() => setSelectedDate(day.id)}
                className={`relative z-10 flex h-full w-16 flex-col justify-between rounded-lg border-2 border-purple-300 bg-white py-2 px-1 text-xs shadow-md sm:w-28 md:w-20 lg:w-28 xl:w-36 ${
                  day.id === selectedDate
                    ? 'ring-2 ring-yellow-300 ring-opacity-75 ring-offset-2 dark:ring-offset-gray-900'
                    : ''
                }`}
              >
                <div className="absolute top-0 left-0 my-4 h-full w-full px-1">
                  {generateScheduleTimes(day.id).map((time, i) => (
                    <div
                      key={time.getMilliseconds() + i}
                      className={`${checkSlot(
                        time,
                        bookingData,
                        day.id,
                        i,
                      ).join(' ')} h-2 ${bookingData?.[0]
                        .map(
                          (item: AvailableTime) =>
                            time >= new Date(item.start) &&
                            time < new Date(item.end) &&
                            'bg-green-300',
                        )
                        .filter(Boolean)}${bookingData?.[1]
                        .map(
                          (item: AvailableTime) =>
                            time >= new Date(item.start) &&
                            time < new Date(item.end) &&
                            ' bg-purple-200',
                        )
                        .filter(Boolean)}`}
                    />
                  ))}
                </div>
                {scheduleTimesLabel(currentDate).map(
                  (time: string, i: number) => (
                    <span
                      className="relative z-20 h-8 bg-transparent text-gray-600"
                      key={time + i}
                    >
                      {time}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
