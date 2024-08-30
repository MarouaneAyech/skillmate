import React, { useState } from 'react';
import { FaSearch, FaBook, FaCode, FaCog } from 'react-icons/fa';
import './Sidebar.css'; // Custom CSS for the sidebar

const Sidebar = ({ onSelect }) => {
    const [active, setActive] = useState('');

    const handleClick = (section) => {
        setActive(section);
        if (onSelect) onSelect(section);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-item" onClick={() => handleClick('search')}>
                <FaSearch className="sidebar-icon" />
                <span className="sidebar-tooltip">Search</span>
            </div>
            <div className="sidebar-item" onClick={() => handleClick('book')}>
                <FaBook className="sidebar-icon" />
                <span className="sidebar-tooltip">Book</span>
            </div>
            <div className="sidebar-item" onClick={() => handleClick('code')}>
                <FaCode className="sidebar-icon" />
                <span className="sidebar-tooltip">Code</span>
            </div>
            <div className="sidebar-item" onClick={() => handleClick('settings')}>
                <FaCog className="sidebar-icon" />
                <span className="sidebar-tooltip">Settings</span>
            </div>
        </div>
    );
};

export default Sidebar;
