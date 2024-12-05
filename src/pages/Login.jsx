import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../components/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaRegEyeSlash,FaRegEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!email || !password) {
        const errorMessage = 'Please fill in all fields';
        setError(errorMessage);
        toast.error(errorMessage);
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        const errorMessage = 'Please enter a valid email';
        setError(errorMessage);
        toast.error(errorMessage);
        return;
    }

    try {
        setError(''); // Clear previous errors

        // Firebase authentication for sign-in
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Logging the user information
        console.log('User Signed In:', user);

        // Store authentication info in localStorage
        localStorage.setItem(
            "auth",
            JSON.stringify({
                accessToken: user.accessToken,
                email: user.email,
                auth: true,
                uid: user.uid,
            })
        );

        // Show success toast
        toast.success('Logged in successfully');

        navigate("/");
        window.location.reload();
    } catch (error) {
        console.error('Login Error:', error);

        const errorMessage = error.message || 'Login failed';
        setError(errorMessage);
        toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Login</h2>
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}  
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prevState) => !prevState)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {!showPassword ? <FaRegEyeSlash/> : <FaRegEye/>}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
