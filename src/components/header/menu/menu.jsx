import React from 'react';
import About from '../../../img/about.svg';
import Resume from '../../../img/resume.svg';
import Works from '../../../img/works.svg';
import Contact from '../../../img/contact.svg';
import Home from '../../../img/house-door.svg'
function Menu({ open }) {
  return (
    <div className={`header_container ${open ? 'open' : 'closed'}`}>
      <ul className="header_container_menu">
      <li className="header_container_menu_li"> <img src={Home} alt="" /> Home</li>
        <li className="header_container_menu_li"> <img src={About} alt="" /> About</li>
        <li className="header_container_menu_li"> <img src={Resume} alt="" /> Resume</li>
        <li className="header_container_menu_li"> <img src={Works} alt="" /> Works</li>
        <li className="header_container_menu_li"><img src={Contact} alt="" /> Contact</li>
      </ul>
    </div>
  );
}

export { Menu };
