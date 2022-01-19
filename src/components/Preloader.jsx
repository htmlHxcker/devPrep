import React from 'react';

import '../styles/utilities.css';
import './Preloader.css';

function Preloader({ children }) {
  return (
    <div className="flex preloader">
      <img src="./images/loading.gif" alt="Loading PrepCards" />
      <h3 className="fs-600">{children}</h3>
    </div>
  );
}

export default Preloader;
