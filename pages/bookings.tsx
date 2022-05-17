import { useSession } from 'next-auth/react';
import { useState } from 'react';

import Calendar from '../components/Calendar';
import Login from '../components/Login';

const Bookings = () => {
    const { data: session, status } = useSession();
    const [error, setError] = useState('');

    console.log('session: ', session);

    if (error) return <p className="error">{error}</p>;
    if (status === 'loading') return <div className="spin" />;
    if (status === 'unauthenticated') return <Login setError={setError} />;
    if (status === 'authenticated') return <Calendar />;
    return null;
};

export default Bookings;
