import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contack">
        <h1 className="app__Footer-headtext">
          Contact Us
        </h1>
        <p className="p__opensans">
          Lorem Ipsum
        </p>
        <p className="p__opensans">
          Lorem Ipsum
        </p>
        <p className="p__opensans">
          Lorem Ipsum
        </p>
      </div>
      <div className="app__footer-links_logo">
        <img 
          src={images.gericht}
          alt="Gericht Logo"
        />
        <p className="p__opensans">
          Lorem Ipsum
        </p>
        <img 
          src={images.spoon}
          alt="Spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">
          Working Hours
        </h1>
        <p className="p__opensans">
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
    <div className="footer__copyright">
      <p className="p__opensans">
        2022 Gericht All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
