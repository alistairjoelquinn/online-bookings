import Calendar from 'components/Calendar';
import Login from 'components/Login';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Bookings() {
  const { status } = useSession();
  const [error, setError] = useState('');

  if (error) return <p className="error">{error}</p>;
  if (status === 'loading') return <div className="spin" />;
  if (status === 'unauthenticated') return <Login setError={setError} />;
  if (status === 'authenticated') return <Calendar />;
  return null;
}
