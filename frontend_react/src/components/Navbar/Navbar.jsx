import React, { useState} from 'react'
import { images } from '../../constants';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="navbar-left">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="app__home__navbar-name lexend-extra-bold-lucky-point-16px">
          EAGLE PRO PAINTING
        </div>
      </div>
      <div className="navbar-right">
        <ul className="app__navbar-links lexend-semi-bold-lucky-point-14px">
          {['about', 'services', 'portfolio'].map((item) => (
            <li key={`link-${item}`} className="app__flex navbar__home-text" >
              <div />
              <NavLink to={`/${item}`} >
                {item}
              </NavLink>
            </li>
          ))}
          <li className="app__flex navbar-estimate ">
            <NavLink to='/estimate' className="lexend-semi-bold-watercourse-14px">
              Free Estimate
            </NavLink>
          </li>
        </ul>
        <div className="line"></div>
        <div className="icons">
          <img src={images.iconPhone} alt="" className="icon-call"/>
          <img src={images.iconEmail} alt="" className="icon-email"/>
        </div>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        { toggle && (
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['about', 'services', 'portfolio'].map((item) => (
              <li key={`${item}`} className="app__flex navbar-text" >
                <NavLink to={`/${item}`} onClick={() => setToggle(false)} className="lexend-semi-bold-watercourse-14px">
                  {item}
                </NavLink>
              </li>
              ))}
              <li className="app__flex estimate ">
                <NavLink to='/estimate' className="lexend-semi-bold-watercourse-14px">
                  Free Estimate
                </NavLink>
              </li>
        
            </ul>
            {/**<div className="menu-icons">
              <img src={images.iconPhone} alt="" className="menu-icon-call"/>
              <img src={images.iconEmail} alt="" className="menu-icon-email"/>
              </div>*/}
            
          </motion.div>
        )}
      </div>

    </nav>
  )
}

export default Navbar;