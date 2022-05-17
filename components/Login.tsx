import { getCsrfToken, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {
    setError: (val: string) => void;
}

const Login = ({ setError }: Props) => {
    const { status } = useSession();
    const [password, setPassword] = useState('');
    const router = useRouter();
    console.log('router: ', router);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const csrfToken = await getCsrfToken();

        await fetch('/api/auth/callback/credentials', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, csrfToken }),
        }).catch(err => {
            console.log('err: ', err);
            setError(err.message);
        });
        window.location.replace('/bookings?login=true');
    };

    return (
        <div className="relative z-10 pt-6 md:h-screen md:pt-16">
            {status === 'unauthenticated' && router.query.login && <p>Sorry, that was the wrong password</p>}
            <p className="para my-0">
                To use the online booking portal you need a password. You can request a password by emailing:
            </p>
            <p className="block py-5 text-center font-sans text-xl tracking-wider text-gray-600 dark:text-gray-400">
                englishwithfelicity@gmail.com
            </p>
            <p className="para mt-0 mb-4">
                This password will log you in for 2 months, so you won&apos;t need to enter it again for subsequent
                bookings!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    name="password"
                    type="password"
                    className="input w-full"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
