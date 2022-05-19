import React from 'react';

interface Props {
    setShowEmailModal: (val: boolean) => void;
}

const EmailModal = ({ setShowEmailModal }: Props) => (
    <>
        <div className="fixed inset-0 z-30 bg-gray-600 opacity-70" onClick={() => setShowEmailModal(false)} />
        <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-purple-400 bg-white p-8 opacity-100 sm:p-16 md:p-20">
            <p className="text-xl tracking-wide text-gray-600 sm:text-2xl md:text-3xl">englishwithfelicity@gmail.com</p>
        </div>
    </>
);

export default EmailModal;
