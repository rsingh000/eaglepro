import React, { useState} from 'react';
import './Home.scss';
import { images } from '../../constants';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Modal } from 'react-responsive-modal';
import { Estimate } from '../../container';
import 'react-responsive-modal/styles.css';

const Home = () => {

  const [toggle, setToggle] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navImages = [images.aboutNav, images.servicesNav, images.portfolioNav, images.estimateNav]


  return (
    <>
    
      <div className="home">
        <nav className="app__home__navbar">
          <div className="home__navbar-left">
            <div className="app__home__navbar-logo">
              <img src={images.logo} alt="logo" />
            </div>
            <div className="app__home__navbar-name lexend-extra-bold-lucky-point-16px">
              EAGLE PRO PAINTING
            </div>
          </div>
          <div className="app__home__navbar-menu">
            <HiMenuAlt4 className="home-open-btn" onClick={() => setToggle(true)} />

              { toggle && (
                <motion.div
                  whileInView={{ x: [300, 0]}}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                  className="home-menu-overlay"
                >
                  <HiX className='home-close-btn' onClick={() => setToggle(false)} />
                  <ul>
                    {['about', 'services', 'portfolio'].map((item, index) => (
                    <li key={`${item}`} className="app__flex navbar__home-text" >
                      <img src={navImages[index]} alt="" className="home-nav-menu-icon" />
                      <NavLink to={`/${item}`} onClick={() => setToggle(false)} className="lexend-semi-bold-watercourse-14px home-nav-text-item">
                        {item}
                      </NavLink>
                    </li>
                    ))}
                    <li className="app__flex estimate ">
                      <img src={navImages[3]} alt="" className="home-nav-menu-icon" />
                      <a href onClick={()=>setOpenModal(true)} style={{cursor: 'pointer'}} className="lexend-semi-bold-watercourse-14px home-nav-text-item">
                        Free Estimate
                      </a>
                    </li>
                  </ul>

                  <div className="home-menu-contact-details">
                    <div className="home-menu-contact-title lexend-semi-bold-midnight-18px">
                      Contact
                    </div>
                    <div className="home-menu-contact-item">
                      <svg width="35" height="35" viewBox="0 0 19 18" fill="none" className="home-menu-contact-icon" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.08887 3C10.7389 3 12.0889 4.35 12.0889 6C12.0889 7.575 10.5139 10.125 9.08887 11.925C7.66387 10.05 6.08887 7.575 6.08887 6C6.08887 4.35 7.43887 3 9.08887 3ZM9.08887 1.5C6.61387 1.5 4.58887 3.525 4.58887 6C4.58887 9.375 9.08887 14.25 9.08887 14.25C9.08887 14.25 13.5889 9.3 13.5889 6C13.5889 3.525 11.5639 1.5 9.08887 1.5ZM9.08887 4.5C8.26387 4.5 7.58887 5.175 7.58887 6C7.58887 6.825 8.26387 7.5 9.08887 7.5C9.91387 7.5 10.5889 6.825 10.5889 6C10.5889 5.175 9.91387 4.5 9.08887 4.5ZM15.0889 14.25C15.0889 15.9 12.3889 17.25 9.08887 17.25C5.78887 17.25 3.08887 15.9 3.08887 14.25C3.08887 13.275 3.98887 12.45 5.41387 11.85L5.86387 12.525C5.11387 12.9 4.58887 13.35 4.58887 13.875C4.58887 14.925 6.61387 15.75 9.08887 15.75C11.5639 15.75 13.5889 14.925 13.5889 13.875C13.5889 13.35 13.0639 12.9 12.2389 12.525L12.6889 11.85C14.1889 12.45 15.0889 13.275 15.0889 14.25Z" fill="#047857"/>
                      </svg>
                      <div className="home-menu-contact-text lexend-normal-oslo-gray-14px">9286 Stuart Crescent Surrey BC V3V 1T6</div>
                    </div>
                    <div className="home-menu-contact-item">
                      <svg width="35" height="35" viewBox="0 0 24 24" className="home-menu-contact-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5 5H6.5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5ZM19 19C17.7 18.9 16.4 18.6 15.2 18.2L16.4 17C17.2 17.2 18.1 17.4 19 17.4V19ZM15 4C15 4.6 14.6 5 14 5C13.4 5 13 4.6 13 4C13 3.4 13.4 3 14 3C14.6 3 15 3.4 15 4ZM18 4C18 4.6 17.6 5 17 5C16.4 5 16 4.6 16 4C16 3.4 16.4 3 17 3C17.6 3 18 3.4 18 4ZM21 4C21 4.6 20.6 5 20 5C19.4 5 19 4.6 19 4C19 3.4 19.4 3 20 3C20.6 3 21 3.4 21 4ZM15 7C15 7.6 14.6 8 14 8C13.4 8 13 7.6 13 7C13 6.4 13.4 6 14 6C14.6 6 15 6.4 15 7ZM18 7C18 7.6 17.6 8 17 8C16.4 8 16 7.6 16 7C16 6.4 16.4 6 17 6C17.6 6 18 6.4 18 7ZM21 7C21 7.6 20.6 8 20 8C19.4 8 19 7.6 19 7C19 6.4 19.4 6 20 6C20.6 6 21 6.4 21 7ZM15 10C15 10.6 14.6 11 14 11C13.4 11 13 10.6 13 10C13 9.4 13.4 9 14 9C14.6 9 15 9.4 15 10ZM18 10C18 10.6 17.6 11 17 11C16.4 11 16 10.6 16 10C16 9.4 16.4 9 17 9C17.6 9 18 9.4 18 10ZM21 10C21 10.6 20.6 11 20 11C19.4 11 19 10.6 19 10C19 9.4 19.4 9 20 9C20.6 9 21 9.4 21 10Z" fill="#047857"/>
                      </svg>

                      <div className="home-menu-contact-text lexend-normal-oslo-gray-14px">(778) 829-6747</div>
                    </div>
                    <div className="home-menu-contact-item">
                      <svg width="35" height="35" viewBox="0 0 19 18" className="home-menu-contact-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5889 4.5C16.5889 3.675 15.9139 3 15.0889 3H3.08887C2.26387 3 1.58887 3.675 1.58887 4.5V13.5C1.58887 14.325 2.26387 15 3.08887 15H15.0889C15.9139 15 16.5889 14.325 16.5889 13.5V4.5ZM15.0889 4.5L9.08887 8.25L3.08887 4.5H15.0889ZM15.0889 13.5H3.08887V6L9.08887 9.75L15.0889 6V13.5Z" fill="#047857"/>
                      </svg>
                      <div className="home-menu-contact-text lexend-normal-oslo-gray-14px">eaglepropaintingltd@gmail.com</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
        </nav>
        <div className="main">
            <motion.div 
              className="content"
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >

              <h1 className="headTitle">
                <span className="lexend-semi-bold-lucky-point-40px head-text">
                  Paint Your Home to
                  <br />
                  Fulfill{" "}
                </span>
                <span className="lexend-semi-bold-white-40px outline-text">
                  your dreams
                  <br />
                </span>
                <span className="lexend-semi-bold-lucky-point-40px head-text">With a fresh Coat here</span>
              </h1>

              <p className="p-text lexend-normal-shuttle-gray-16px">
                Everything you need about painting your home to live or sell will be here, where it will be easier for you
              </p>

              <div className="estimateBtn">
                <div className="free-estimate lexend-semi-bold-white-14px">
                  Free Estimate
                </div>
                <img className="evaarrow-fill" src={images.btnArrow} alt="eva:arrow-ios-forward-fill" />
              </div>

              <div className="brands">
                <div className="p-text lexend-normal-shuttle-gray-16px">Brands We Trust Blindly</div>
                <motion.div 
                  className="images"
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 1, ease: 'easeInOut' }}  
                >
                  <img src={images.dulux} alt="" className="dulux"/>
                  <img src={images.sherwin} alt="" className="sherwin"/>
                  <img src={images.moore} alt="" className="moore" />
                </motion.div>
              </div>

            </motion.div>
            <div className="img">

              <ul className="app__home__navbar-links lexend-semi-bold-lucky-point-14px">
                {['about', 'services', 'portfolio'].map((item) => (
                  <li className="app__flex navbar__home-text">
                    <NavLink to={`/${item}`}>
                      {item}
                    </NavLink>
                  </li>
                ))}
                <li className="app__flex navbar__home-estimate">
                  <a href onClick={() => setOpenModal(true)} style={{cursor: 'pointer'}} className="lexend-semi-bold-watercourse-14px">
                    Free Estimate
                  </a>
                </li>
              </ul>
              <div className="stats">
                <motion.div 
                  className="card"
                  whileInView={{ opacity: 1}}
                  whileHover={{ scale: 1.1}}
                  transition={{duration: 0.5, type: 'tween'}}
                >
                  <div className="images">
                    <img src={images.person1} alt="" className="circleImg" />
                    <img src={images.person2} alt="" className="circleImg" />
                    <img src={images.person3} alt="" className="circleImg" />
                  </div>
                  <div className="cardDiv">
                    <div className="header lexend-semi-bold-lucky-point-16px">
                      200+ People
                    </div>
                    <div className="h-text">
                      Successfully Got their <br />Homes Painted 
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="card"
                  whileInView={{ opacity: 1}}
                  whileHover={{ scale: 1.1}}
                  transition={{duration: 0.5, type: 'tween'}}
                >
                  <img src={images.homeRect1} alt="" className="cardImg" />
                  <div className="cardDiv">
                    <div className="header lexend-semi-bold-lucky-point-16px">
                      6+ Houses & Still Counting
                    </div>
                    <div className="h-text">
                      Painted Month By Month
                    </div>
                  </div>
                </motion.div>
              </div>
              
            </div>
        </div>
            

      </div>
      { openModal && 
        <Modal open={openModal} onClose={()=>setOpenModal(false)} center style={{padding: 0}}>
          <Estimate />
        </Modal> }
    </>
  )
}

export default Home