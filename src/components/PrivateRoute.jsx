import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("auth"));
        if (!data || !data.auth) {
            navigate("/login"); // Redirect if not authenticated
        }
    }, [navigate]);

    const data = JSON.parse(localStorage.getItem("auth"));
    if (!data || !data.auth) {
        // Return null to prevent rendering while redirecting
        return null;
    }

    return <>{children}</>;
};

export default PrivateRoute;
