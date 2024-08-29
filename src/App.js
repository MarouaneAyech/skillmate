import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import VerticalNavbar from './components/VerticalNavbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('');

  const handleIconClick = (page) => {
    setActivePage(page); // Set active page based on the clicked icon
  };

  return (
    <div className="app">
      <Sidebar onIconClick={handleIconClick} />
      {activePage && <VerticalNavbar activePage={activePage} />}
      <div className="content-container">
        {activePage && (
          <div className={`page-window ${activePage}`}>
            <div className="page-content">
              <h1>{activePage} Page</h1>
              <p>This is the {activePage} section content.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
