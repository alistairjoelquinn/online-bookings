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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p>To use the online booking portal you require a password. </p>
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
    );
};

export default Login;
