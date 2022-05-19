import { Copy } from 'grommet-icons';
import React, { useState } from 'react';

import writeTextToClipboard from '../lib/write-text-to-clipboard';
import ModalContainer from './ModalContainer';

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
        <ModalContainer closeModal={setShowEmailModal}>
            <p className="modal pb-6 text-xl tracking-wide text-gray-600 sm:text-2xl md:text-3xl">
                englishwithfelicity@gmail.com
            </p>
            {!isCopied ? (
                <Copy onClick={copyClickHandler} cursor="pointer" />
            ) : (
                <p className="modal">Copied to clipboard</p>
            )}
        </ModalContainer>
    );
};

export default EmailModal;
