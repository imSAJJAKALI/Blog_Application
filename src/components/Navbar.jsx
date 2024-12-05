import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (e) => {
        if (!e.target.closest('.dropdown')) {
            setIsDropdownOpen(false);
        }
    };

    // Update `isLoggedIn` based on localStorage
    const updateAuthStatus = () => {
        const storedAuth = localStorage.getItem("auth");
        const data = storedAuth ? JSON.parse(storedAuth) : null;
        setIsLoggedIn(data?.auth || false);
    };

    // Add event listener for localStorage changes and click outside
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('storage', updateAuthStatus); // Listen to `localStorage` changes

        // Initial load
        updateAuthStatus();

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('storage', updateAuthStatus);
        };
    }, []);

    // Handle login
    const handleLogin = () => {
        localStorage.setItem("auth", JSON.stringify({ auth: true }));
        updateAuthStatus(); // Manually trigger update
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("auth");
        updateAuthStatus(); // Manually trigger update
        navigate("/")
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">
                <Link to="/">Blog App</Link>
            </h1>
            <div className="flex items-center gap-10">
                <Link to="/blogs" className="hover:text-gray-300">Blogs</Link>
                <div className="relative dropdown">
                    <button
                        onClick={toggleDropdown}
                        aria-label="User Menu"
                        className="hover:text-gray-300 flex items-center focus:outline-none"
                    >
                        {isLoggedIn
                            ? <FaRegUserCircle size={30} className="mr-2" />
                            : <IoMdLogIn size={30} />
                        }
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
                            {isLoggedIn ? (
                                <>
                                    {/* <Link
                                        to="/profile"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        Profile
                                    </Link> */}
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        Signup
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
