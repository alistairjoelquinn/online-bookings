import React from 'react';

interface Props {
    setShowEmailModal: (val: boolean) => void;
}

const EmailModal = ({ setShowEmailModal }: Props) => (
    <>
        <div
            className="absolute inset-0 z-30 flex items-center justify-center bg-gray-600 opacity-40"
            onClick={() => setShowEmailModal(false)}
        />
        <div className="absolute left-1/2 top-1/2 z-40 max-w-screen-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-gray-800 bg-white p-20 opacity-100">
            <p className="text-3xl tracking-wide text-gray-900">englishwithfelicity@gmail.com</p>
        </div>
    </>
);

export default EmailModal;
