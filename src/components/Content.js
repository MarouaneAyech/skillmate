import React from 'react';
import './Content.css';

const Content = ({ selectedSection }) => {
  return (
    <div className="content">
      <h1>{selectedSection || "Click an icon"}</h1>
    </div>
  );
};

export default Content;
