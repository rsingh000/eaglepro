import React from 'react';
import { images } from '../constants';

const SocialMedia = () => {
  return (
    <div className="social-wrapper" style={{ display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
        <div className="vertical-line" style= {{ width: '4px', height: '60px', backgroundColor: '#3c4563'}}></div>
        <a href="https://www.facebook.com/profile.php?id=100083492285269" rel="noreferrer" target="_blank"><img src={images.fbWrapper} alt="" style={{ width: '35px', height: '35px', transform: 'rotate(90deg)' }}/></a>
        <a href="https://www.instagram.com/eaglepropainters.ca/" rel="noreferrer" target="_blank"><img src={images.instaWrapper} alt="" style={{ width: '35px', height: '35px' }}/></a>
        <a href="https://www.tiktok.com/@eaglepropaintingltd" rel="noreferrer" target="_blank"><img src={images.tiktokWrapper} alt="" style={{ width: '35px', height: '35px' }}/></a>
    </div>
  )
}

export default SocialMedia