import { BookedTime } from 'models/calendar';

enum lessonTypes {
  cefr = 'CEFR level class',
  business = 'Business English Class',
  conversation = 'Conversation Class',
  '' = '',
}

interface Props {
  data: BookedTime;
}

export default function BookingThanksPanel({ data }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="modal font-semibold">Thank you {data.name}</p>
      <p className="modal">
        You have booked a {lessonTypes[data.type]} from {data.start} till{' '}
        {data.end} on{' '}
        {new Date(data.date).toLocaleDateString('en-uk', {
          weekday: 'short',
          day: 'numeric',
          month: '2-digit',
        })}
        .
      </p>
      <p className="modal">
        If you have any questions just email me at{' '}
        <span className="font-normal tracking-wide">
          englishwithfelicity@gmail.com.
        </span>
      </p>
      <p className="modal">I look forward to learning with you!</p>
    </div>
  );
}
