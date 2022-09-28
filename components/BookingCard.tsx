import { Edit } from 'grommet-icons';
import { BookedTime } from '../models/calendar';

interface Props {
  item: BookedTime;
  selectCard: (val: BookedTime) => void;
  showModal: (val: boolean) => void;
}

export default function BookingCard({ item, selectCard, showModal }: Props) {
  return (
    <div className="my-2 flex w-80 animate-reveal items-center justify-between gap-2 rounded-lg border-2 border-purple-400 bg-white px-2 py-4 opacity-100 dark:bg-gray-900 sm:w-auto">
      <div>
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
          {new Date(item.start).toLocaleTimeString().slice(0, -3)} -{' '}
          {new Date(item.end).toLocaleTimeString().slice(0, -3)}
        </p>
      </div>
      <div className="self-start">
        <Edit
          onClick={() => {
            selectCard(item);
            showModal(true);
          }}
          cursor="pointer"
        />
      </div>
    </div>
  );
}
