import ModalContainer from 'components/ModalContainer';
import isoify from 'lib/isoify';
import type { AvailableTime } from 'models/calendar';
import { useState } from 'react';
import { useQueryClient } from 'react-query';

interface Props {
  closeModal: (val: boolean) => void;
  populate: AvailableTime | null;
  clearState?: () => void;
}

export default function ModalAdmin({
  closeModal,
  populate,
  clearState,
}: Props) {
  const queryClient = useQueryClient();
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [availableTime, setAvailableTime] = useState<AvailableTime>(
    populate
      ? { ...populate }
      : {
          date: '',
          start: '',
          end: '',
        },
  );

  const updateAvailableTime = (e: any) => {
    setAvailableTime(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.values(availableTime).filter(Boolean).length !==
      Object.values(availableTime).length
    ) {
      setError('Remember to fill out all the input fields...');
    }
    const isoDataAdmin = isoify(availableTime);
    const res = await fetch('/api/submit-admin-hours', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(isoDataAdmin),
    });
    const data = await res.json();
    if (data.error) {
      setError(data.error);
    } else if (data.success === true) {
      setSubmitted(true);
      queryClient.invalidateQueries('get-available-times-and-bookings');
    } else {
      setError('Something unexpected went wrong!');
    }
  };

  return (
    <ModalContainer clearState={clearState} closeModal={closeModal}>
      <div className="flex flex-col justify-evenly text-sm md:text-base">
        {!submitted ? (
          <>
            <p className="modal mb-4 text-xl font-semibold">
              {!error
                ? `${populate ? 'Edit' : 'Enter'} your availability:`
                : error}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex w-full justify-end">
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                  Select a date:
                </p>
                <input
                  defaultValue={availableTime.date}
                  required
                  name="date"
                  type="date"
                  onChange={updateAvailableTime}
                  className="input w-96"
                />
              </div>
              <div className="flex w-full justify-end">
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                  From:
                </p>
                <input
                  defaultValue={new Date(
                    availableTime.start,
                  ).toLocaleTimeString()}
                  name="start"
                  required
                  type="time"
                  onChange={updateAvailableTime}
                  className="input mr-7 w-36"
                />
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                  Until:
                </p>
                <input
                  defaultValue={new Date(
                    availableTime.end,
                  ).toLocaleTimeString()}
                  name="end"
                  required
                  type="time"
                  onChange={updateAvailableTime}
                  className="input w-36"
                />
              </div>
              <button type="submit" className="btn">
                {populate ? 'Update' : 'Submit'}
              </button>
            </form>
          </>
        ) : (
          <p>Yayy, that worked...</p>
        )}
      </div>
    </ModalContainer>
  );
}
