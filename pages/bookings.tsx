import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Bookings = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    return <div>Bookings</div>;
};

export default Bookings;
