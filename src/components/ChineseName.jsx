import React from 'react';
import './ChineseName.css';

const ChineseName = () => {
  return (
    <div className="chinese-name-wrapper">
      <span className="char" style={{ animationDelay: '0s' }}>黎</span>
      <span className="char" style={{ animationDelay: '0.5s' }}>穎</span>
      <span className="char" style={{ animationDelay: '1s' }}>豪</span>
    </div>
  );
};

export default ChineseName;
