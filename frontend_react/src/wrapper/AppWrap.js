import React from 'react';
import { SocialMedia } from '../components';
import './AppWrap.scss';

const AppWrap = (Component, idName, classNames) => function HOC() {

  console.log(Component);
  console.log(idName);
  console.log(classNames);
  return (
    <div id={idName} className={classNames}>
        <div className="wrapper">
          <Component />
          <SocialMedia />
        </div>
        
        <div className="copyright">
          <p className="cpy-text lexend-normal-gray-16px">© 2022 - <span className="lexend-normal-lucky-point-16px">Eagle Pro Painting</span> - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default AppWrap