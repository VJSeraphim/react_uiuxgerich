import React from 'react';

import { SubHeading } from '../../components'
import { images, data } from '../../constants'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading 
        title="Contact"
      />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem Ipsum
        </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>
          Lorem Ipsum
        </p>
        <p className="p__opensans">
          Lorem Ipsum
        </p>
        <p className="p__opensans">
          Lorem Ipsum
        </p>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img 
        src={images.findus}
        alt="Findus"
      />
    </div>
  </div>
);

export default FindUs;
