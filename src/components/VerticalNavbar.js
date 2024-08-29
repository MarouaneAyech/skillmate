import React from 'react';
import './VerticalNavbar.css';

const VerticalNavbar = ({ activePage }) => {
  const links = [
    { name: 'Option 1', link: '#' },
    { name: 'Option 2', link: '#' },
    { name: 'Option 3', link: '#' },
  ];

  return (
    <div className="vertical-navbar">
      <h3>{activePage} Menu</h3>
      <ul className="nav flex-column">
        {links.map((linkItem, index) => (
          <li className="nav-item" key={index}>
            <a className="nav-link" href={linkItem.link}>
              {linkItem.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNavbar;
