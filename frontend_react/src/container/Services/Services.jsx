import React, {  Suspense, useEffect, useState } from 'react';
import { Navbar, Footer } from '../../components';
import { images } from '../../constants';
import './Services.scss';
import { motion} from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

import LoadingSpin from 'react-loading-spin';
import { urlFor, client } from '../../client.js';
import Scene  from '../../Scene.jsx'

const Services = () => {

  const [activeFilter, setActiveFilter] = useState('Residential');
  const [services, setServices] = useState([]);
  const [filterServices, setFilterServices] = useState([]);
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

  const bgArr = ['fee1e1', 'dbeafe', 'd1fae5', 'fee1e1'];
  const colorArr = ['ef4444', '1d4ed8', '047857', 'ef4444'];
  const iconsArr = [images.popular, images.house, images.wallet, images.popular]


  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query)
      .then((data) => {
        setServices(data);
        setFilterServices(data);
      })
  }, [])

  const handleServiceFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard([{y: 100, opcaity: 0}]);
    setTimeout(() => {
      setAnimateCard([{y: 0, opcaity: 1}]);
      setFilterServices(services.filter((service) => service.type.includes(category)));
    }, 500);

  }
  

  return (
    <div className="services">
      <Navbar />
      <div className="mainServices">

        <div className="coverServices">
          <div className="model">
          <Canvas camera={{ position: [0,5,15], fov: 60}}>
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={
              <Html style={{width: '100%', backgroundColor: 'green'}}>
                <div className='loader'>
                  <LoadingSpin />
                  <h3 className='lexend-normal-shuttle-gray-16px'>Loading!</h3>
                </div>
              </Html>} >
              <Scene />
            </Suspense>
            </Canvas>
          </div>
          <motion.div whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="vision">
            <div className="subtitle">
            <div className="line-services-media"></div>
              <div className="subtitle-text">Your Trust Our Vision</div>
              <div className="line-services"></div>
            </div>
            <h1 className="title lexend-semi-bold-lucky-point-32px">A Fresh Coat For A Fresh Start</h1>
            <p className="title-text lexend-normal-shuttle-gray-16px">
              We offer top quality all surface painting services, consultation, referrals, and more in the Lower Mainland and nearby areas.
              <br /><br />
              We can readily handle all customers both commercial and residential. We focus on high quality work with complete customer
              satisfaction. We hire only skilled, specialized and professional painters and provide comprehensive training for all our employees.
              <br /><br />Nothing brings out a homes beauty like a fresh coat of paint inside or outside. When you’re ready to improve your homes look, Eagle Pro Painting Contractors puts you at ease with our professional painters and project management and we strive to stay within your budget and time frame. Some of the areas we service include. Vancouver, Surrey, Burnaby, North Vancouver, Abbotsford, Aldergrove, Fraser Valley.
            </p>
          </motion.div>
        </div>

        <div className="featured">
          <div className="featured-header">
            <div className="featured-sub-title">
              <div className="featured-line"></div>
              <div className="featured-sub-text lexend-medium-california-14px">
                Our Recommendation For You
              </div>
              <div className="featured-line"></div>
            </div>
            <h1 className="featured-title-text lexend-semi-bold-lucky-point-32px">
              Featured Services
            </h1>
          </div>
          <div className="featured-categories">
            <div className={`residential ${activeFilter === 'Residential' ? 'item-active' : ''}`} onClick={() => handleServiceFilter('Residential')}>
            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5724 11.1146V19.7827C21.5722 20.0546 21.4985 20.3213 21.3592 20.5547C21.2198 20.7881 21.02 20.9795 20.7807 21.1086C20.564 21.2259 20.3209 21.2858 20.0744 21.2826H15.5691C15.3702 21.2826 15.1794 21.2036 15.0388 21.063C14.8981 20.9223 14.8191 20.7315 14.8191 20.5326V16.032C14.8191 15.8331 14.7401 15.6423 14.5994 15.5016C14.4588 15.361 14.268 15.282 14.0691 15.282H11.0691C10.8702 15.282 10.6794 15.361 10.5388 15.5016C10.3981 15.6423 10.3191 15.8331 10.3191 16.032V20.5326C10.3191 20.7315 10.2401 20.9223 10.0994 21.063C9.95876 21.2036 9.768 21.2826 9.56908 21.2826H5.07255C4.8599 21.2832 4.64959 21.2383 4.45571 21.1509C4.26183 21.0635 4.08886 20.9358 3.9484 20.7761C3.70182 20.4909 3.56807 20.1254 3.57237 19.7484V11.1145C3.57253 10.9055 3.61628 10.6989 3.70081 10.5077C3.78535 10.3166 3.90882 10.1452 4.06333 10.0045L11.5627 3.18579C11.8382 2.93347 12.1982 2.79349 12.5717 2.79346C12.9453 2.79342 13.3053 2.93333 13.5808 3.18561L21.0815 10.0046C21.236 10.1453 21.3594 10.3167 21.4439 10.5079C21.5284 10.699 21.5722 10.9056 21.5724 11.1146Z" />
            </svg>

              <div className="r-text">Residential</div>
            </div>

            <div className={`commercial ${activeFilter === 'Commercial' ? 'item-active' : ''}`} onClick={() => handleServiceFilter('Commercial')}>
            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5723 11.2827V5.28271C17.5723 4.18271 16.6723 3.28271 15.5723 3.28271H9.57227C8.47227 3.28271 7.57227 4.18271 7.57227 5.28271V7.28271H5.57227C4.47227 7.28271 3.57227 8.18271 3.57227 9.28271V19.2827C3.57227 20.3827 4.47227 21.2827 5.57227 21.2827H11.5723V17.2827H13.5723V21.2827H19.5723C20.6723 21.2827 21.5723 20.3827 21.5723 19.2827V13.2827C21.5723 12.1827 20.6723 11.2827 19.5723 11.2827H17.5723ZM7.57227 19.2827H5.57227V17.2827H7.57227V19.2827ZM7.57227 15.2827H5.57227V13.2827H7.57227V15.2827ZM7.57227 11.2827H5.57227V9.28271H7.57227V11.2827ZM11.5723 15.2827H9.57227V13.2827H11.5723V15.2827ZM11.5723 11.2827H9.57227V9.28271H11.5723V11.2827ZM11.5723 7.28271H9.57227V5.28271H11.5723V7.28271ZM15.5723 15.2827H13.5723V13.2827H15.5723V15.2827ZM15.5723 11.2827H13.5723V9.28271H15.5723V11.2827ZM15.5723 7.28271H13.5723V5.28271H15.5723V7.28271ZM19.5723 19.2827H17.5723V17.2827H19.5723V19.2827ZM19.5723 15.2827H17.5723V13.2827H19.5723V15.2827Z" />
            </svg>

              <div className="c-text">Commercial</div>
            </div>
          </div>
          
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="featured-services"
          >

            
              { (filterServices.length === 0) &&
              <div className="info">
                <img src={require('../../assets/giphy.gif')} alt="Under Construction"/>
                <h2>Coming Soon</h2>
              </div>
              }

          
            {filterServices.map((service, index) => (
              <motion.div className="service-main" whileInView={{ opacity: [0, 1], duration: 1}} key={index}>
                <img src={urlFor(service.image)} alt="" className="service-img"/>
                  <div className="service-tag" style={{ color: "#"+colorArr[index], backgroundColor: "#"+bgArr[index]}}>
                    <img src={iconsArr[index]} alt="" />
                    <div className="tag-name">{service.tag}</div>
                    
                  </div>
                 
                <div className="service-header lexend-medium-midnight-24px">{service.header}</div>
                <motion.div 
                  whileInView={{ opacity: [0, 1], transition: [0, 1000],duration: 1}}
                  className="service-content lexend-medium-oxford-blue-20px"
                >
                  {service.content}
                </motion.div>
              </motion.div>
             
            ))}
          </motion.div>
        </div>

        <div className="terms">
          <div className="left-terms">
              <div className="terms-copy opensans-semi-bold-raven-14px">Copyright © 2022 Randeep Singh. Crafted with</div>
              <img src={images.heart} className="icon-heart" alt="" />
          </div>
          <div className="right-terms opensans-normal-raven-14px">Term Condition & Policy</div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Services