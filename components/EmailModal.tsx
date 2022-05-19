import { Copy } from 'grommet-icons';
import React, { useState } from 'react';
import writeTextToClipboard from '../lib/write-text-to-clipboard';

interface Props {
    setShowEmailModal: (val: boolean) => void;
}

const EmailModal = ({ setShowEmailModal }: Props) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyClickHandler = async () => {
        try {
            await writeTextToClipboard('englishwithfelicity@gmail.com');
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
            console.log('browser not compatible');
        }
    };

    return (
        <>
            <div className="fixed inset-0 z-30 bg-gray-600 opacity-70" onClick={() => setShowEmailModal(false)} />
            <div className="absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg border-2 border-purple-400 bg-white px-8 py-10 opacity-100 sm:px-16 md:px-20">
                <p className="pb-6 text-xl tracking-wide text-gray-600 sm:text-2xl md:text-3xl">
                    englishwithfelicity@gmail.com
                </p>
                {!isCopied ? (
                    <Copy onClick={copyClickHandler} cursor="pointer" />
                ) : (
                    <p className="font-sans">Copied to clipboard!</p>
                )}
            </div>
        </>
    );
};

export default EmailModal;
