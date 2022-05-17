import { getCsrfToken } from 'next-auth/react';
import { useState } from 'react';

interface Props {
    setPasswordAuthenticated: (val: boolean) => void;
    setError: (val: string) => void;
}

const Login = ({ setPasswordAuthenticated, setError }: Props) => {
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const csrfToken = await getCsrfToken();

        try {
            const res = await fetch('/api/auth/callback/credentials', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, csrfToken }),
            });
            console.log('res: ', res);
            const test = res.json();
            console.log('test: ', test);
            if (
                res.url ===
                `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/signin?callbackUrl=${process.env.NEXT_PUBLIC_NEXTAUTH_URL}&error=CredentialsSignin`
            ) {
                setError('Incorrect password!');
            } else {
                setPasswordAuthenticated(true);
            }
        } catch (err) {
            setError('Oops, something went wrong!');
        }
    };

    return (
        <div className="relative z-10 pt-6 md:h-screen md:pt-16">
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
