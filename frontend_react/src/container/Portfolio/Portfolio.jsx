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
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const Portfolio = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [primaryBlog, setPrimaryBlog] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

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

  const fetchTestimonials = async (tQuery) => {
    try {
      const data = await client.fetch(tQuery);
      if(data) {
        setTestimonials(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handlePrimaryBlog = (index) => {
    const element = document.getElementById('blogs');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth'})
    }
    setPrimaryBlog(index);
  }

  useEffect(() => {

    const pquery = '*[_type == "portfolio"]';
    const bQuery = '*[_type == "blogs"]';
    const tQuery = '*[_type == "testimonials"]'

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
      fetchTestimonials(tQuery);

  }, [])

  let mainBlog;

  if(blogs.length === 4) {
    mainBlog = 
    <motion.div key={primaryBlog} 
    whileInView={{ y: [110, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    className="primary-blog" id="primary">
    <h1 className="blog-primary-title">{blogs[primaryBlog].header}</h1>
    <div className="blog-primary-line"></div>
    <img src={urlFor(blogs[primaryBlog].mainimage)} alt="" className="blog-primary-mainimage" />
    <div className="blog-primary-stats">
      <div className="blog-primary-stats-left">
        <img src={urlFor(blogs[primaryBlog].authorimage)} alt="" className="blog-primary-author-photo" />
        <div className="blog-primary-author-name lexend-normal-oxford-blue-14px">{blogs[primaryBlog].author}</div>
      </div>
      <div className="blog-primary-stats-right">
        <div className="blog-primary-duration">
          <img src={images.duration} alt="" />
          <div className="blog-primary-time lexend-normal-oxford-blue-14px">{blogs[primaryBlog].duration} read</div>
        </div>
        {/* <PortableText className="blog-primary-date lexend-normal-oxford-blue-14px" value={[blogs[0].content]} /> */}
        <div className="blog-primary-date lexend-normal-oxford-blue-14px">{blogs[primaryBlog].date}</div>
      </div>
    </div>
    <div className="blog-primary-content lexend-normal-oxford-blue-14px">
      <BlockContent
        blocks={blogs[primaryBlog].content}
        projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
        dataset="production"
      />
    </div>
    {/* <div className="blog-primary-content">{blogs[0].content}</div> */}
  </motion.div>
  } else {
    mainBlog = <div>Loading........</div>
  }
  
  const test = testimonials[currentIndex];

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
                slidesPerView: 2,
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

      <div className="blogs" id="blogs">
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
            {mainBlog}
              <div className="blogs-col">
                { blogs.map((blog, index) => (
                  <motion.div 
                    key={index}
                    whileInView={{ opacity: 1}}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'}}
                    transition={{duration: 0.5, type: 'tween'}}
                    onClick={() => handlePrimaryBlog(index)}
                    className="blog-container">
                    <img src={urlFor(blog.mainimage)} alt="blogphoto" className='blog-left'/>
                    <div className="blog-right">
                      <div className="blog-author">
                        <img src={urlFor(blog.authorimage)} alt="" className="blog-photo" />
                        <div className="blog-name lexend-normal-oxford-blue-14px">{blog.author}</div>
                      </div>
                      <div className="blog-head lexend-medium-lucky-point-18px">{blog.header}</div>

                      <div className="blog-stats">
                        <div className="blog-stats-duration">
                          <img src={images.duration} alt="" />
                          <div className="blog-duration lexend-normal-oslo-gray-14px">{blog.duration} read</div>
                        </div>
                        <div className="blog-date lexend-normal-oslo-gray-14px">{blog.date}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              
               
          
              
            </div>
      </div>

      <div className="testimonials">

        <div className="blogs-header">
          <div className="blogs-subtitle">
            <div className="blog-line"></div>
            <div className="blog-subtitle-text lexend-medium-california-14px">See Our Review</div>
          </div>
          <h1 className="blogs-title lexend-semi-bold-lucky-point-32px">
            What Our Clients Say About Us
          </h1>
        </div>
        { testimonials.length && (
          <>
          
            <motion.div className="testimonial-item" key={currentIndex}
                  whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}>
                <img src={urlFor(test.workimageurl)} alt="" className="test-image" />
                <motion.div className="test-card" >
                  <img src={urlFor(test.workimageurl)} alt="" className="test-card-image" />
                  <div className="test-card-content">
                    <p className="test-title lexend-semi-bold-lucky-point-20px">{test.header}</p>
                    <p className="test-review lexend-normal-shuttle-gray-14px">{test.feedback}</p>
                  </div>
                  <div className="test-person">
                    <div className="person-left">
                      <img src={urlFor(test.imageurl)} alt="" className="test-photo" />
                      <div className="test-name lexend-normal-oxford-blue-14px">{test.name}</div>
                    </div>
                    <div className="person-right">
                      <img src={images.star} alt="" className="test-photo" />
                      <div className="test-rating lexend-normal-oxford-blue-14px">{test.rating}</div>
                    </div>
                  </div>
                </motion.div>
            </motion.div>

            <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1) }>
                <HiChevronRight />
              </div>
            </div>
          </>
        )}           
      </div>     
      <div className="terms">
        <div className="left-terms">
          <div className="terms-copy opensans-semi-bold-raven-14px">Copyright © 2022 Randeep Singh. Crafted with</div>
            <img src={images.heart} className="icon-heart" alt="" />
          </div>
        <div className="right-terms opensans-normal-raven-14px">Term Condition & Policy</div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio