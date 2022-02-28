import React from 'react';

import './Chef.css';
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img 
        src={images.chef}
        alt="Chef Image"
      />
    </div>
    <div className="app__wrapper_info">
      <SubHeading 
        title="Chef's Word"
      />
      <h1 className="headtext__cormorant">
        What We Believe In...
      </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img 
            src={images.quote}
            alt="Quote"
          />
          <p className="p__opensans">
            Lorem Ipsum
          </p>
        </div>
        <p className="p__opensans">
          Lorem Ipsum Muspi Merol
        </p>
      </div>
      <div className="app__chef-sign">
          <p>
            Kevin Shim
          </p>
          <p className="p__opensans">
            Chef & Founder
          </p>
          <img 
            src={images.sign} 
            alt="Sign"
          />
      </div>
    </div>
  </div>
);

export default Chef;
