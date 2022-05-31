import React from 'react';
import { BookedTime } from '../models/calendar';

interface Props {
    date: string;
    error: string;
    populate?: BookedTime | null;
    updateBookingData: (e: any) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BookingFormFields = ({ date, error, updateBookingData, handleSubmit, populate }: Props) => (
    <>
        <p className="modal mb-4">
            {error ||
                (populate
                    ? 'Edit this booking by updating the fields below:'
                    : 'To complete the booking I need a few more details. Please fill in the remaining fields then click Book Now.')}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex w-full justify-end">
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                    Select a date:
                </p>
                <input
                    defaultValue={populate ? populate.date : date}
                    required
                    name="date"
                    type="date"
                    onChange={updateBookingData}
                    className="input w-96"
                />
            </div>
            <div className="flex w-full justify-end">
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">From:</p>
                <input
                    defaultValue={populate?.start && new Date(populate.start).toLocaleTimeString()}
                    name="start"
                    required
                    type="time"
                    onChange={updateBookingData}
                    className="input mr-7 w-36"
                />
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">Until:</p>
                <input
                    defaultValue={populate?.end && new Date(populate.end).toLocaleTimeString()}
                    name="end"
                    required
                    type="time"
                    onChange={updateBookingData}
                    className="input w-36"
                />
            </div>
            <div className="flex w-full justify-end">
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                    Full Name:
                </p>
                <input
                    defaultValue={populate?.name}
                    name="name"
                    required
                    type="text"
                    onChange={updateBookingData}
                    className="input w-96"
                />
            </div>
            <div className="flex w-full justify-end">
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                    Email Address:
                </p>
                <input
                    defaultValue={populate?.email}
                    name="email"
                    required
                    type="email"
                    onChange={updateBookingData}
                    className="input w-96"
                />
            </div>
            <div className="flex w-full justify-end">
                <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                    Booking Type:
                </p>
                <select
                    defaultValue={populate?.type}
                    required
                    name="type"
                    onChange={updateBookingData}
                    className="input w-96 pr-4"
                >
                    <option value="">Choose an option...</option>
                    <option value="cefr">CEFR level class: A2 - C1</option>
                    <option value="conversation">Conversation class</option>
                    <option value="business">Business English class</option>
                </select>
            </div>
            <button type="submit" className="btn">
                {populate ? 'Update' : 'Book Now'}
            </button>
        </form>
    </>
);

export default BookingFormFields;
