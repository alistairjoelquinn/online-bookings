import { useQuery } from 'react-query';

import { getAvailableTimesAndBookings } from '../lib/dates';
import type { AvailableTime } from '../models/calendar';

const Admin = () => {
    const { status, data } = useQuery('get-available-times-and-bookings', getAvailableTimesAndBookings);

    const [available, booked] = data || [undefined, undefined];

    console.log('available , booked: ', available, booked);

    return (
        <section>
            <h3 className="mb-6 text-2xl">Admin Page</h3>
            <h4 className="my-4 border-b-2 border-gray-500 text-lg">Upcoming bookings</h4>
            {booked?.map((item: AvailableTime) => (
                <div
                    key={item._id}
                    className=" my-2 flex w-80 animate-reveal flex-col items-center rounded-lg border-2 border-purple-400 bg-white px-2 py-4 opacity-100 dark:bg-gray-900 sm:w-auto"
                >
                    <p>{item._id}</p>
                </div>
            ))}
            <h4 className="my-4 border-b-2 border-gray-500 text-lg">Old bookings</h4>
            {booked?.map((item: AvailableTime) => (
                <p key={item._id}>{item._id}</p>
            ))}
            <h4 className="my-4 border-b-2 border-gray-500 text-lg">My available times:</h4>
            {available?.map((item: AvailableTime) => (
                <p key={item._id}>{item._id}</p>
            ))}
        </section>
    );
};

export default Admin;
