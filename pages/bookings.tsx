import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import Login from '../components/Login';

const Bookings = () => {
    const { data: session, status } = useSession();
    const [passwordAuthenticated, setPasswordAuthenticated] = useState(false);
    const [error, setError] = useState('');

    console.log('session: ', session);

    if (error) return <p className="error">{error}</p>;
    if (passwordAuthenticated) return <Calendar />;

    return (
        <div>
            {status === 'loading' ? (
                <div className="spin" />
            ) : (
                <Login setPasswordAuthenticated={setPasswordAuthenticated} setError={setError} />
            )}
        </div>
    );
};

export default Bookings;
