import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <Link to="/" className="font-bold text-xl">Reminder App</Link>
                <div className="float-right">
                    <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
