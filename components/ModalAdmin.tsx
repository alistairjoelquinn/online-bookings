import { useState } from 'react';
import ModalContainer from './ModalContainer';

interface Props {
    closeModal: (val: boolean) => void;
}

const ModalAdmin = ({ closeModal }: Props) => {
    const [error, setError] = useState(false);

    return (
        <ModalContainer closeModal={closeModal}>
            <div className="flex flex-col justify-evenly text-sm md:text-base">
                <p className="modal mb-4">
                    {!error
                        ? 'To complete the booking I need a few more details. Please fill in the remaining fields then click Book Now.'
                        : error}
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex w-full justify-end">
                        <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                            Select a date:
                        </p>
                        <input required name="date" type="date" onChange={updateBookingData} className="input w-96" />
                    </div>
                    <div className="flex w-full justify-end">
                        <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                            From:
                        </p>
                        <input
                            name="start"
                            required
                            type="time"
                            onChange={updateBookingData}
                            className="input mr-7 w-36"
                        />
                        <p className="modal text-md py-3 pr-5 font-medium dark:text-gray-100 md:text-lg lg:text-xl">
                            Until:
                        </p>
                        <input name="end" required type="time" onChange={updateBookingData} className="input w-36" />
                    </div>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
        </ModalContainer>
    );
};

export default ModalAdmin;
