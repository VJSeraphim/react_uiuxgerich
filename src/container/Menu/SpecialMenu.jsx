import React from 'react';

import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import './SpecialMenu.css';
import { GiWineBottle } from 'react-icons/gi';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu for you" />
      <h1 className="headtext__cormorant">
        Today's Special Cuisine
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">
          Wine & Beer
        </p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, i) => (
            <MenuItem key={wine.title + i} title={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img 
          src={images.menu}
          alt="menu image"
        />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">
          Wine & Beer
        </p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, i) => (
            <p>
              <MenuItem key={cocktail.title + i} title={cocktail.price} tags={cocktail.tags}/>
            </p>
          ))}
        </div>
      </div>
    </div>
    <div stype={{ marginTop : '15px' }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
