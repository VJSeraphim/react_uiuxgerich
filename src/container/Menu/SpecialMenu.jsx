import React from 'react';

import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu for you" />
      <h1 className="headtext__cormorant">
        Today's Special Cuisine
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      
    </div>
  </div>
);

export default SpecialMenu;
