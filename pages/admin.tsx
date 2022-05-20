import { useQuery } from 'react-query';

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
                {booked?.map((item: BookedTime) => (
                    <div
                        key={item._id}
                        className="my-2 flex w-80 animate-reveal flex-col items-start gap-2 rounded-lg border-2 border-purple-400 bg-white px-2 py-4 opacity-100 dark:bg-gray-900 sm:w-auto"
                    >
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae nesciunt, veritatis,
                            libero voluptatibus eius dolores architecto ipsa,
                        </p>
                    </div>
                ))}
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">Old bookings</h4>
                {booked?.map((item: BookedTime) => (
                    <p key={item._id}>{item._id}</p>
                ))}
                <h4 className="my-4 border-b-2 border-gray-500 text-lg">My available times:</h4>
                {available?.map((item: AvailableTime) => (
                    <p key={item._id}>{item._id}</p>
                ))}
            </section>
        </div>
    );
};

export default Admin;
