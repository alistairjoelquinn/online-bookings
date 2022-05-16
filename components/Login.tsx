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
        <form onSubmit={handleSubmit}>
            <p>Please enter the password to make a booking...</p>
            <input name="password" type="password" className="input" onChange={e => setPassword(e.target.value)} />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
};

export default Login;
