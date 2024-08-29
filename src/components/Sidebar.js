import React, { useState } from 'react';
import { FaSearch, FaBook, FaCog, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ onIconClick }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    { id: 1, icon: <FaSearch />, text: 'Search' },
    { id: 2, icon: <FaBook />, text: 'Library' },
    { id: 3, icon: <FaCog />, text: 'Settings' },
    { id: 4, icon: <FaEnvelope />, text: 'Messages' },
  ];

  return (
    <div className="sidebar bg-dark">
      {icons.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item p-3 ${hoveredIcon === item.id ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredIcon(item.id)}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => onIconClick(item.text)}
        >
          {item.icon}
          {hoveredIcon === item.id && (
            <div className="sidebar-tooltip">{item.text}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
