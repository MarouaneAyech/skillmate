import React, { useState } from 'react';
import { FaSearch, FaBook, FaCode, FaCog, FaUpload } from 'react-icons/fa'; // Add the Upload icon
import './Sidebar.css'; // Custom CSS for the sidebar

const Sidebar = ({ onSelect }) => {
    const [active, setActive] = useState('');

    const handleClick = (section) => {
        setActive(section);
        if (onSelect) onSelect(section);
    };

    return (
        <div className="sidebar">
            <div className={`sidebar-item ${active === 'search' ? 'active' : ''}`} onClick={() => handleClick('search')}>
                <FaSearch className="sidebar-icon" />
                <span className="sidebar-tooltip">Search</span>
            </div>
            <div className={`sidebar-item ${active === 'book' ? 'active' : ''}`} onClick={() => handleClick('book')}>
                <FaBook className="sidebar-icon" />
                <span className="sidebar-tooltip">Book</span>
            </div>
            <div className={`sidebar-item ${active === 'code' ? 'active' : ''}`} onClick={() => handleClick('code')}>
                <FaCode className="sidebar-icon" />
                <span className="sidebar-tooltip">Code</span>
            </div>
            <div className={`sidebar-item ${active === 'settings' ? 'active' : ''}`} onClick={() => handleClick('settings')}>
                <FaCog className="sidebar-icon" />
                <span className="sidebar-tooltip">Settings</span>
            </div>
            <div className={`sidebar-item ${active === 'upload' ? 'active' : ''}`} onClick={() => handleClick('upload')}>
                <FaUpload className="sidebar-icon" />
                <span className="sidebar-tooltip">Upload PDF</span>
            </div>
        </div>
    );
};

export default Sidebar;
