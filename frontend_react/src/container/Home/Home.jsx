import React, { useState} from 'react';
import './Home.scss';
import { images } from '../../constants';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Home = () => {

  const [toggle, setToggle] = useState(false);

  return (
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
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            { toggle && (
              <motion.div
                whileInView={{ x: [300, 0]}}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['about', 'services', 'portfolio'].map((item) => (
                  <li key={`${item}`} className="app__flex navbar__home-text" >
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
                <NavLink to='/estimate' className="lexend-semi-bold-watercourse-14px">
                  Free Estimate
                </NavLink>
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
  )
}

export default Home