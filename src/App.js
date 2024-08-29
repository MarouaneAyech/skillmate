import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for the app

const App = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleSelect = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="app-container">
            <Sidebar onSelect={handleSelect} />
            <div className="content">
                {activeSection === 'search' && <div className="section">Search Page</div>}
                {activeSection === 'book' && <div className="section">Book Page</div>}
                {activeSection === 'code' && <div className="section">Code Page</div>}
                {activeSection === 'settings' && <div className="section">Settings Page</div>}
            </div>
        </div>
    );
};

export default App;
