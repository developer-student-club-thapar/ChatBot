import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase'; // Import your Firebase config
import { signInWithEmailAndPassword } from 'firebase/auth';
import BackButton from "./backbutton";
import './loginpg.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // React Router's hook to navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors

        try {
            // Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("User logged in:", user);

            // Navigate to chatbot page or any other page after successful login
            navigate('/chatbot');

        } catch (error) {
            // Handle Errors
            if (error.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.');
            } else if (error.code === 'auth/user-not-found') {
                setError('No account found with this email. Please sign up.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
            console.error("Error logging in:", error.message);
        }
    };

    return (
        <div>
            <div className="signup-form">
                <h1>LOGIN</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder='Enter email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                    
                    <button type='submit'>
                        LOGIN
                    </button>
                </form>

                <p id="loginAlready">
                    If account doesn't exist, then <Link to="/signup">signup</Link>
                </p>
            </div>

            <div>
                <BackButton />
            </div>
        </div>
    );
}
