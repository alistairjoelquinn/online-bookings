import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import Login from '../components/Login';

const Bookings = () => {
    const { data: session, status } = useSession();
    const [error, setError] = useState('');

    console.log('session: ', session);

    if (error) return <p className="error">{error}</p>;
    if (status === 'authenticated') return <Calendar />;

    return (
        <div>
            {status === 'unauthenticated' && <p>Sorry, that was the wrong password</p>}
            {status === 'loading' ? <div className="spin" /> : <Login setError={setError} />}
        </div>
    );
};

export default Bookings;
