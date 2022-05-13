import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Bookings = () => {
    const [dasswordAuthenticated, setPasswordAuthenticated] = useState(false);
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

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

    return <div>Bookings</div>;
};

export default Bookings;
