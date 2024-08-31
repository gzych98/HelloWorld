import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            alert(`User logged in successfully: ${user.email}`);
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error (${errorCode}): ${errorMessage}`);
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <h2>Sign In</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
