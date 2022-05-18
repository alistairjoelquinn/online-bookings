import React from 'react';
import { Transition } from '@headlessui/react';

interface Props {
    setShowEmailModal: (val: boolean) => void;
    showEmailModal: boolean;
}

const EmailModal = ({ setShowEmailModal, showEmailModal }: Props) => (
    <>
        <Transition
            show={showEmailModal}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-60"
            leave="transition-opacity duration-400"
            leaveFrom="opacity-60"
            leaveTo="opacity-0"
            className="absolute inset-0 z-30 bg-gray-600 opacity-70"
            onClick={() => setShowEmailModal(false)}
        />
        <div className="absolute left-1/2 top-1/2 z-40 max-w-screen-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-purple-400 bg-white p-20 opacity-100">
            <p className="text-3xl tracking-wide text-gray-600">englishwithfelicity@gmail.com</p>
        </div>
    </>
);

export default EmailModal;
