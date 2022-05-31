import { useQuery } from 'react-query';
import { useState } from 'react';

import { Add } from 'grommet-icons';
import BookingCard from '../components/BookingCard';
import AvailableCard from '../components/AvailableCard';
import { getAvailableTimesAndBookings } from '../lib/dates';
import type { AvailableTime, BookedTime } from '../models/calendar';
import iconHoverEventHandlers from '../lib/icon-hover-event-handlers';
import ModalAdmin from '../components/ModalAdmin';
import ModalBookings, { BookingData } from '../components/ModalBookings';

const Admin = () => {
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);
    const [adminWindowIsVisible, setAdminWindowIsVisible] = useState(false);
    const [editBookingIsVisible, setEditBookingIsVisible] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(null);
    const [selectedAvailability, setSelectedAvailability] = useState<AvailableTime | null>(null);
    const [adminPassword, setAdminPassword] = useState('');
    const [error, setError] = useState('');
    const [displayAll, setDisplayAll] = useState(false);

    const { status, data }: { status: string; data: [AvailableTime[], BookedTime[]] | undefined } = useQuery(
        'get-available-times-and-bookings',
        getAvailableTimesAndBookings,
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/check-admin-password', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: adminPassword }),
            });
            const authData = await res.json();
            if (authData.admin) {
                setAdminAuthenticated(true);
            } else {
                setError('Incorrect password');
            }
        } catch (err) {
            setError('Bad things just happened - try again');
        }
    };

    const [available, booked] = data || [null, null];

    if (!adminAuthenticated) {
        return (
            <div className="relative z-10 animate-reveal pt-6 dark:text-gray-100 md:h-screen md:pt-16">
                <section className="max-w-6xl overflow-scroll px-4 pt-0 pb-6 text-left md:h-5/6 lg:max-w-xl">
                    <h4 className="mb-6 text-5xl font-extrabold sm:text-5xl md:text-4xl lg:text-5xl">
                        {error || 'Identify Yourself'}
                    </h4>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            name="password"
                            type="password"
                            placeholder="Admin Password"
                            className="input w-full"
                            onChange={e => setAdminPassword(e.target.value)}
                        />
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </section>
            </div>
        );
    }

    if (status === 'loading') return <div className="spin" />;

    return (
        <div className="relative z-10 w-4/6 animate-reveal pt-6  dark:text-gray-100 md:h-screen md:pt-16">
            {adminWindowIsVisible && (
                <ModalAdmin
                    clearState={() => setSelectedAvailability(null)}
                    closeModal={setAdminWindowIsVisible}
                    populate={selectedAvailability}
                />
            )}
            {editBookingIsVisible && (
                <ModalBookings
                    date=""
                    clearState={() => setSelectedBooking(null)}
                    closeModal={setEditBookingIsVisible}
                    populate={selectedBooking}
                />
            )}
            <section className="max-w-6xl overflow-scroll px-4 pt-0 pb-6 text-left md:h-full lg:max-w-xl">
                <div className="mt-4 flex items-center justify-between">
                    <h3 className="mr-6 text-5xl font-extrabold sm:text-5xl md:text-4xl lg:text-5xl">Admin Page</h3>
                    <button onClick={() => setDisplayAll(val => !val)} type="button" className="btn mr-5 mb-5 md:mb-0">
                        {!displayAll ? 'Display All' : 'Display Less'}
                    </button>
                    <Add onClick={() => setAdminWindowIsVisible(true)} {...iconHoverEventHandlers()} cursor="pointer" />
                </div>
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">
                    {!displayAll ? 'Upcoming bookings' : 'All bookings'}
                </h4>
                {booked && booked.filter((item: BookedTime) => new Date(item.start) > new Date()).length < 1 && (
                    <p>No upcoming bookings...</p>
                )}
                {!displayAll
                    ? booked
                          ?.filter((item: BookedTime) => new Date(item.start) > new Date())
                          .map((item: BookedTime) => (
                              <BookingCard showModal={setEditBookingIsVisible} key={item._id} item={item} />
                          ))
                          .reverse()
                    : booked
                          ?.map((item: BookedTime) => (
                              <BookingCard showModal={setEditBookingIsVisible} key={item._id} item={item} />
                          ))
                          .reverse()}
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">
                    {!displayAll ? 'Upcoming availability' : 'All availability'}
                </h4>
                {available &&
                    available.filter((item: AvailableTime) => new Date(item.start) > new Date()).length < 1 && (
                        <p>No upcoming availability...</p>
                    )}
                {!displayAll
                    ? available
                          ?.filter((item: AvailableTime) => new Date(item.start) > new Date())
                          .map((item: AvailableTime) => (
                              <AvailableCard
                                  showModal={setAdminWindowIsVisible}
                                  selectCard={setSelectedAvailability}
                                  item={item}
                                  key={item._id}
                              />
                          ))
                    : available?.map((item: AvailableTime) => (
                          <AvailableCard
                              showModal={setAdminWindowIsVisible}
                              selectCard={setSelectedAvailability}
                              item={item}
                              key={item._id}
                          />
                      ))}
            </section>
        </div>
    );
};

export default Admin;
