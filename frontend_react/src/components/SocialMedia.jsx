import React from 'react';
import { images } from '../constants';

const SocialMedia = () => {
  return (
    <div className="social-wrapper" style={{ display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
        <div className="vertical-line" style= {{ width: '4px', height: '60px', backgroundColor: '#3c4563'}}></div>
        <img src={images.fbWrapper} alt="" style={{ width: '35px', height: '35px', transform: 'rotate(90deg)' }}/>
        <img src={images.instaWrapper} alt="" style={{ width: '35px', height: '35px' }}/>
        <img src={images.tiktokWrapper} alt="" style={{ width: '35px', height: '35px' }}/>
    </div>
  )
}

export default SocialMedia