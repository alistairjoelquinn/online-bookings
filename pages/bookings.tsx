import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import Login from '../components/Login';

const Bookings = () => {
    const { data: session } = useSession();
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

    if (error) return <p className="error">Oops, something unexpected went wrong!</p>;
    if (passwordAuthenticated) return <Calendar />;

    return (
        <div>
            {session ? <div className="spin" /> : <Login checkPassword={checkPassword} setPassword={setPassword} />}
        </div>
    );
};

export default Bookings;
