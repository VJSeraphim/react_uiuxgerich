import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img 
        src={images.G}
        alt="g letter"
      />
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">
            About Us
          </h1>
          <img 
            src={images.spoon}
            alt="Spoon"
            className="spoon__img"
          />
          <p className="p__opensans">
            Lorem Ipsum
          </p>
          <button type="button" className="custom__button">
            For More Info
          </button>
        </div>
        <div className="app__aboutus-content_knife flex_center">
          <img 
            src={images.knife}
            alt="about_knife"
          />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">
            Our History
          </h1>
          <img 
            src={images.spoon}
            alt="Spoon"
            className="spoon__img"
          />
          <p className="p__opensans">
            Lorem Ipsum
          </p>
          <button type="button" className="custom__button">
            For More Info
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
