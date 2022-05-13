interface Props {
    setPassword: (val: string) => void;
    checkPassword: () => void;
}

const Login = ({ setPassword, checkPassword }: Props) => {
    const submitUserPassword = (e: React.FormEvent) => {
        e.preventDefault();
        checkPassword();
    };

    return (
        <form onSubmit={submitUserPassword}>
            <p>Please enter the password to make a booking...</p>
            <input className="input" onChange={e => setPassword(e.target.value)} />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
};

export default Login;
