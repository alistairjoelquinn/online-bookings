import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Calendar from '../components/Calendar';

const Bookings = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            // router.replace('/');
        },
    });
    const [passwordAuthenticated, setPasswordAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');

    const checkPassword = async () => {
        const res = await fetch('/api/check-password', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        });
        const data = await res.json();
        if (data.admin) {
            setPasswordAuthenticated(true);
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <div>
            <h3>Bookings page</h3>
            {passwordAuthenticated || (!session ? <div className="spin" /> : <input />)}
            {passwordAuthenticated && <Calendar />}
        </div>
    );
};

export default Bookings;
