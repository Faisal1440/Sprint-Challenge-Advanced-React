import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

function Navbar() {

    const [ darkMode, setDarkMode ] = useDarkMode();

    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);}

    
  return (
    <div className="Navbar">
       <h1>!Women's World Cup! </h1>
        <div className="dark-mode__toggle">
          <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >DarkSide
          </button>
        </div>
    </div>
  );
}


export default Navbar;