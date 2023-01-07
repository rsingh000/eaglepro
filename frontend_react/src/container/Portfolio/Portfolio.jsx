import React, { useEffect, useState } from 'react';
import "./Portfolio.scss";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { urlFor, client } from '../../client.js';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import BlockContent from "@sanity/block-content-to-react";

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const Portfolio = () => {


  const [portfolio, setPortfolio] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [primaryBlog, setPrimaryBlog] = useState({});

  const fecthPortfolio = async (pQuery) => {
    try {
      const data = await client.fetch(pQuery);
      if(data) {
        setPortfolio(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fecthBlogs = async (bQuery) => {
    try {
      const data = await client.fetch(bQuery);
      if(data) {
        setBlogs(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    const pquery = '*[_type == "portfolio"]';
    const bQuery = '*[_type == "blogs"]';

    /* client.fetch(query)
      .then((data) => {
        setPortfolio(data);
      })

    client.fetch(bQuery)
      .then((data)  => {
        setBlogs(data);
        console.log(blogs);
        console.log(primaryBlog);
      }) */

      fecthPortfolio(pquery);
      fecthBlogs(bQuery);

  }, [])

  let mainBlog;

  if(blogs.length == 4) {
    mainBlog = <div className="primary-blog">
    <h1 className="blog-primary-title">{blogs[0].header}</h1>
    <div className="blog-primary-line"></div>
    <img src={urlFor(blogs[0].mainimage)} alt="" className="blog-primary-mainimage" />
    <div className="blog-primary-stats">
      <div className="blog-primary-stats-left">
        <img src={urlFor(blogs[0].authorimage)} alt="" className="blog-primary-author-photo" />
        <div className="blog-primary-author-name lexend-normal-oxford-blue-14px">{blogs[0].author}</div>
      </div>
      <div className="blog-primary-stats-right">
        <div className="blog-primary-duration">
          <img src={images.duration} alt="" />
          <div className="blog-primary-time lexend-normal-oxford-blue-14px">{blogs[0].duration} read</div>
        </div>
        {/* <PortableText className="blog-primary-date lexend-normal-oxford-blue-14px" value={[blogs[0].content]} /> */}
        <div className="blog-primary-date lexend-normal-oxford-blue-14px">{blogs[0].date}</div>
      </div>
    </div>
    <BlockContent
    className="blog-primary-content"
              blocks={blogs[0].content}
              projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
              dataset="production"
            />
    {/* <div className="blog-primary-content">{blogs[0].content}</div> */}
  </div>
  } else {
    mainBlog = <div>Loading........</div>
  }
  

  return (
    <div className="portfolio">
      <Navbar />
      <div className="main-portfolio">
        <div className="main-header">
          <div className="main-subtitle">
            <div className="sub-line"></div>
            <div className="sub-text">A Facelift For Your House</div>
            <div className="sub-line"></div>
          </div>
          <div className="main-title lexend-semi-bold-lucky-point-32px">Flawless Reputation For Excellence</div>
        </div>
        <div className="photo-container">
          <Swiper
            effect="coverflow"
            grabCursor="true"
            centeredSlides="true"
            spaceBetween={0}
            navigation={true} 
            slidesPerView={3}
            loop="true"
            pagination={{ clickable: true, fixedBullets: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 25,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              700: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
              500: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              411: {
                spaceBetween: 100,
                slidesPerView: 1,
              },
              300: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
            }}
          >
            { portfolio.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={urlFor(item.image)} alt={"pic"+index} className="photos" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="blogs">
            <div className="blogs-header">
              <div className="blogs-subtitle">
                <div className="blog-line"></div>
                <div className="blog-subtitle-text lexend-medium-california-14px">See Tips And Trcik From Experts Vision</div>
              </div>
              <h1 className="blogs-title lexend-semi-bold-lucky-point-32px">
                Find Out More About
                <br />
                Planning To Paint Homes
              </h1>
            </div>
            <div className="blogs-container">
              <div className="blogs-col">
                { blogs.map((blog, index) => (
                  <motion.div 
                    key={index}
                    whileInView={{ opacity: 1}}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'}}
                    transition={{duration: 0.5, type: 'tween'}}
                    className="blog-container">
                    <img src={urlFor(blog.mainimage)} alt="blogphoto" className='blog-left'/>
                    <div className="blog-right">
                      <div className="blog-author">
                        <img src={urlFor(blog.authorimage)} alt="" className="blog-photo" />
                        <div className="blog-name lexend-normal-oxford-blue-14px">{blog.author}</div>
                      </div>
                      <div className="blog-head lexend-medium-lucky-point-18px">{blog.header}</div>
                      <div className="blog-stats">
                        <img src={images.duration} alt="" />
                        <div className="blog-duration lexend-normal-oslo-gray-14px">{blog.duration} read</div>
                        <div className="blog-date lexend-normal-oslo-gray-14px">{blog.date}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              
               {mainBlog}
          
              
            </div>
      </div>


      <div className="testimonials"></div>
      <Footer />
    </div>
  )
}

export default Portfolio