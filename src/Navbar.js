import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa';

import { links, social } from './data';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const containerRef = useRef(null);

  const toggle = () => {
    setShowLinks(!showLinks);
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = '0px';
    }
  },[showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h4>sky<span>coding</span></h4>
          <button onClick={toggle} className="toggle-btn">
            <FaBars/>
          </button>
        </div>
        <div className="links-container" ref={containerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { url, text, id } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icons) => {
            const { id, icon, url } = icons;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar