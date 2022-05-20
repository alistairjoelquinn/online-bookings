import { BookedTime } from '../models/calendar';

const BookingCard = ({ item }: { item: BookedTime }) => (
    <div className="my-2 flex w-80 animate-reveal flex-col items-start gap-2 rounded-lg border-2 border-purple-400 bg-white px-2 py-4 opacity-100 dark:bg-gray-900 sm:w-auto">
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>
            {new Date(item.date).toLocaleDateString('en-uk', {
                weekday: 'short',
                day: 'numeric',
                month: '2-digit',
                year: 'numeric',
            })}
        </p>
        <p>
            From: {new Date(item.start).toLocaleTimeString().slice(0, -3)} To:{' '}
            {new Date(item.end).toLocaleTimeString().slice(0, -3)}
        </p>
    </div>
);

export default BookingCard;
