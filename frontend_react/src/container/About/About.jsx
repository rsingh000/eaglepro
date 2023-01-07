import React, {useState} from 'react';
import "./About.scss";
import Navbar from '../../components/Navbar/Navbar';
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function ProductImage( { id, onExpand }){
  return (
      <motion.img
        src={require(`../../assets/about-${id}.png`)} 
        width="200"
        height="200"
        alt=""
        onClick={() => onExpand(id)}
        className="related-product-image"
        layoutId={`product-${id}`}
      />    
  );
}

const About = () => {

  const [productIds, setProductIds] = useState([2,3,4]);
  const [primaryProduct, setPrimaryProduct] = useState(1);

  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId
    ];
    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }
  return (
    <>
      
      <div className="about">
      <Navbar />
        <div className="mainAbout">
          <div className="contentAbout">
            <motion.div className="house-detail" 
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}>
              <div className="header">
                <div className="sub-title">
                  <div className="leftline"></div>
                  <div className="lexend-medium-california-14px c-text">Ready To Connect</div>
                </div>
                <h1 className="h-text lexend-semi-bold-lucky-point-32px">
                  Let's Tour And Trust Our Service!
                </h1>
                <p className="p-text lexend-normal-shuttle-gray-16px">
                  Services recommended by our clients that have been curated <br />to become the home of their dreams!
                </p>
              </div>
              <div className="who-text lexend-semi-bold-lucky-point-16px">
                WHO WE ARE
              </div>
              <p className="info-text lexend-normal-shuttle-gray-16px">
                Eagle Pro Painting Contractors is a homegrown, lower mainland owned and operated painting from the Fraser Valley area with
                diverse background.
                <br /><br />
                Eagle Pro Painting is unique in the fact that not only do we offer full suite of painting services, we offer a hands on approach                  where you deal directly with one of the owners of the company. We believe in a hand holding model for service and delivery of
                our services with clear and written expectations.<br />< br/>It's no bragging when you back it up! We carry a full line of commercial insurances and are up to date on equipment and safety procedures. Our process is simple, it doesn't happen if it isn't written down and understood. Each project is assigned a project manager, each project has a complete written scope that is checked off and walked together with the client upon completion and no job is complete until the client is satisfied.
              </p>
            </motion.div>
            <div className="separator"></div>
            <div className="contact-info">
              <div className="left-contact">
                <img src={images.owner} alt="" className="owner"/>
                <div className="nameDesignation">
                  <div className="name">Bikramjit Virdi</div>
                  <div className="title">Owner & Operator</div>
                </div>
              </div>
              <div className="contact-btn">
                <img src={images.iconPhoneFilled} alt="" className="icon-call"/>
                <span className="contact-now lexend-semi-bold-white-14px">Contact Now</span>
              </div>
            </div>
            <div className="separator-bottom"></div>
          </div>
   
            <div className="containerImages">
              <AnimateSharedLayout type="crossfade">
                <main className="primary-container">
                  <AnimatePresence>
                    <motion.img
                      key={primaryProduct}
                      className="primary-product-image"
                      src={require(`../../assets/about-${primaryProduct}.png`)}
                      width="600px"
                      height="600px"
                      alt=""
                      layoutId={`product-${primaryProduct}`}
                    />
                  </AnimatePresence>
                </main>
                <aside className="product-gallery">
                  <AnimatePresence>
                    {productIds.map((id) => (                   
                      <ProductImage id={id} key={id} onExpand={setAsPrimary}/>
                    ))}
                  </AnimatePresence>
                </aside>
              </AnimateSharedLayout>
            </div>



          {/*<div className="imagesAbout">
            <div className="overlay">
              <img src={images.mainCover} alt="" className="maincover" />
              <img src={images.left} alt="" className="leftPanel" />
              <img src={images.center} alt="" className="centerPanel" />
              <img src={images.right} alt="" className="rightPanel" />
            </div>
          </div>*/}
        </div>

      </div>
    </>
  )
}

export default AppWrap(About, 'about');