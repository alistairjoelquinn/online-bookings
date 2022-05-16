import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import Login from '../components/Login';

const Bookings = () => {
    const { data: session } = useSession();
    const [passwordAuthenticated, setPasswordAuthenticated] = useState(true);
    const [error, setError] = useState('');

    console.log('session: ', session);

    if (error) return <p className="error">Oops, something unexpected went wrong!</p>;
    if (passwordAuthenticated) return <Calendar />;

    return (
        <div>
            {session ? (
                <div className="spin" />
            ) : (
                <Login setPasswordAuthenticated={setPasswordAuthenticated} setError={setError} />
            )}
        </div>
    );
};

export default Bookings;
