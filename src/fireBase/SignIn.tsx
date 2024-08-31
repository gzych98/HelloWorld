import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resetMessage, setResetMessage] = useState<string | null>(null);

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // Reset error state
        setResetMessage(null); // Reset reset message state
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // alert(`User logged in successfully: ${user.email}`);
        } catch (error: any) {
            setError('Invalid email or password. Please try again.');
        }
    };

    const handlePasswordReset = async () => {
        setError(null);
        setResetMessage(null);
        try {
            await sendPasswordResetEmail(auth, email);
            setResetMessage('A password reset link has been sent to your email.');
        } catch (error: any) {
            setError('Failed to send password reset email. Please check your email address.');
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <h2>Sign In</h2>
            {error && <div className="error-message">{error}</div>}
            {resetMessage && <div className="reset-message">{resetMessage}</div>}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <div className="password-container">
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            <button type="submit" className="login-button">Sign In</button>
            <button type="button" onClick={handlePasswordReset} className="forgot-password-button">Forgot Password?</button>
            <div className="social-login">
                <button type="button" className="google-button">
                    <FaGoogle className="button-icon" /> Sign in with Google
                </button>
                <button type="button" className="facebook-button">
                    <FaFacebook className="button-icon" /> Sign in with Facebook
                </button>
            </div>
        </form>
    );
};

export default SignIn;
