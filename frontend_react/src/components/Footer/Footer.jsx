import React from 'react';
import { images } from '../../constants';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="bio">
        <div className="name-logo">
          <img src={images.logo} alt="" className="footer-logo" />
          <div className="name-eagle lexend-bold-lucky-point-16px">Eagle Pro Painting</div>
        </div>
        <div className="bio-content lexend-normal-shuttle-gray-14px">Reliable Commercial & Residential <br />Painting Services That Will Exceed All Of Your Expectations</div>
      </div>
      <div className="footer-links">
        <div className="links-title lexend-semi-bold-midnight-18px">Links</div>
        <NavLink to='/about' className="link-text lexend-normal-oslo-gray-14px">
            About Us
         </NavLink>
         <NavLink to='/services' className="link-text lexend-normal-oslo-gray-14px">
            Services
         </NavLink>
         <NavLink to='/portfolio' className="link-text lexend-normal-oslo-gray-14px">
            Portfolio
         </NavLink>
         <NavLink to='/estimate' className="link-text lexend-normal-oslo-gray-14px">
            Free Estimate
         </NavLink>
      </div>

      <div className="contact-details">
        <div className="contact-title lexend-semi-bold-midnight-18px">
          Contact
        </div>
        <div className="contact-item">
          <img src={images.mapMarker} alt="" className="contact-icon" />
          <div className="contact-text lexend-normal-oslo-gray-14px">9286 Stuart Crescent Surrey BC V3V 1T6</div>
        </div>
        <div className="contact-item">
          <img src={images.ftPhone} alt="" className="contact-icon" />
          <div className="contact-text lexend-normal-oslo-gray-14px">(778) 829-6747</div>
        </div>
        <div className="contact-item">
          <img src={images.ftEmail} alt="" className="contact-icon" />
          <div className="contact-text lexend-normal-oslo-gray-14px">eaglepropaintingltd@gmail.com</div>
        </div>
      </div>

      <div className="social-media">
        <div className="social-title lexend-semi-bold-midnight-18px">Follow Us</div>
        <div className="social-icons">
          <img src={images.ftFb} alt="" className="social-item" />
          <img src={images.ftInsta} alt="" className="social-item" />
          <img src={images.ftWhatsapp} alt="" className="social-item" />
        </div>
      </div>

    </div>
  )
}

export default Footer