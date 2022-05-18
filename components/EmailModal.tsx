import React from 'react';

interface Props {
    setShowEmailModal: (val: boolean) => void;
}

const EmailModal = ({ setShowEmailModal }: Props) => (
    <>
        <div className="absolute inset-0 z-30 bg-gray-600 opacity-70" onClick={() => setShowEmailModal(false)} />
        <div className="absolute left-1/2 top-1/2 z-40 max-w-screen-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-purple-400 bg-white p-20 opacity-100">
            <p className="text-3xl tracking-wide text-gray-600">englishwithfelicity@gmail.com</p>
        </div>
    </>
);

export default EmailModal;
