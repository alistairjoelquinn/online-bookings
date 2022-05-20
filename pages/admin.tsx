import { useQuery } from 'react-query';

import BookingCard from '../components/BookingCard';
import { getAvailableTimesAndBookings } from '../lib/dates';
import type { AvailableTime, BookedTime } from '../models/calendar';

const Admin = () => {
    const { status, data } = useQuery('get-available-times-and-bookings', getAvailableTimesAndBookings);

    const [available, booked] = data || [undefined, undefined];

    console.log('available , booked: ', available, booked);

    return (
        <div className="relative z-10 animate-reveal pt-6 dark:text-gray-100 md:h-screen md:pt-16">
            <section className="max-w-6xl overflow-scroll px-4 pt-0 pb-6 text-left md:h-4/5 lg:max-w-xl">
                <h3 className="mb-6 text-5xl font-extrabold sm:text-5xl md:text-4xl lg:text-5xl">Admin Page</h3>
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">Upcoming bookings</h4>
                {booked?.filter((item: BookedTime) => new Date(item.start) > new Date()).length < 1 && (
                    <p>No upcoming bookings...</p>
                )}
                {booked
                    ?.filter((item: BookedTime) => new Date(item.start) > new Date())
                    .map((item: BookedTime) => <BookingCard key={item._id} item={item} />)
                    .reverse()}
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">Previous bookings</h4>
                {booked?.filter((item: BookedTime) => new Date(item.start) < new Date()).length < 1 && (
                    <p>No upcoming bookings...</p>
                )}
                {booked
                    ?.filter((item: BookedTime) => new Date(item.start) < new Date())
                    .map((item: BookedTime) => <BookingCard key={item._id} item={item} />)
                    .reverse()}
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">My available times:</h4>
                {available?.map((item: AvailableTime) => (
                    <p key={item._id}>{item._id}</p>
                ))}
            </section>
        </div>
    );
};

export default Admin;
