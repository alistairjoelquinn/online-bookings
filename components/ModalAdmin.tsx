import { useState } from 'react';
import { useQueryClient } from 'react-query';

import ModalContainer from './ModalContainer';
import type { AvailableTime } from '../models/calendar';

interface Props {
    closeModal: (val: boolean) => void;
}

const ModalAdmin = ({ closeModal }: Props) => {
    const queryClient = useQueryClient();
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [availableTime, setAvailableTime] = useState<AvailableTime>({
        date: '',
        start: '',
        end: '',
    });

    const updateAvailableTime = (e: any) => {
        setAvailableTime(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(availableTime).filter(Boolean).length !== Object.values(availableTime).length) {
            setError('Remember to fill out all the input fields...');
        }
        const res = await fetch('/api/submit-admin-hours', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(availableTime),
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
        <ModalContainer closeModal={closeModal}>
            <div className="flex flex-col justify-evenly text-sm md:text-base">
                {!submitted ? (
                    <>
                        <p className="modal mb-4 text-xl font-semibold">
                            {!error ? 'Enter your availability:' : error}
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex w-full justify-end">
                                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                                    Select a date:
                                </p>
                                <input
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
                                    name="end"
                                    required
                                    type="time"
                                    onChange={updateAvailableTime}
                                    className="input w-36"
                                />
                            </div>
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                    </>
                ) : (
                    <p>Yayy, that worked...</p>
                )}
            </div>
        </ModalContainer>
    );
};

export default ModalAdmin;
