import { useQuery } from 'react-query';
import { useState } from 'react';

import BookingCard from '../components/BookingCard';
import AvailableCard from '../components/AvailableCard';
import { getAvailableTimesAndBookings } from '../lib/dates';
import type { AvailableTime, BookedTime } from '../models/calendar';

const Admin = () => {
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);
    const [adminPassword, setAdminPassword] = useState('');
    const [error, setError] = useState('');

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
        <div className="relative z-10 animate-reveal pt-6 dark:text-gray-100 md:h-screen md:pt-16">
            <section className="max-w-6xl overflow-scroll px-4 pt-0 pb-6 text-left md:h-5/6 lg:max-w-xl">
                <h3 className="mb-6 text-5xl font-extrabold sm:text-5xl md:text-4xl lg:text-5xl">Admin Page</h3>
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">Upcoming bookings</h4>
                {booked && booked.filter((item: BookedTime) => new Date(item.start) > new Date()).length < 1 && (
                    <p>No upcoming bookings...</p>
                )}
                {booked
                    ?.filter((item: BookedTime) => new Date(item.start) > new Date())
                    .map((item: BookedTime) => <BookingCard key={item._id} item={item} />)
                    .reverse()}
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">My available times:</h4>
                {available?.map((item: AvailableTime) => (
                    <AvailableCard item={item} key={item._id} />
                ))}
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">Previous bookings</h4>
                {booked && booked.filter((item: BookedTime) => new Date(item.start) < new Date()).length < 1 && (
                    <p>No upcoming bookings...</p>
                )}
                {booked
                    ?.filter((item: BookedTime) => new Date(item.start) < new Date())
                    .map((item: BookedTime) => <BookingCard key={item._id} item={item} />)
                    .reverse()}
            </section>
        </div>
    );
};

export default Admin;
