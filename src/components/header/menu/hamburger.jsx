import React from 'react';
import hamburger from '../../../img/list.svg';

function Hamburger({ toggleMenu }) {
  return (
    
    <img src={hamburger} alt="Menu" className="header_container_menu_hamburger" onClick={toggleMenu} />
  );
}

export { Hamburger };
