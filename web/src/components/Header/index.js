import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import GenralPopup from '../GeneralPopup';
import EventsManager from '../../containers/EventsManager';

let selectedFlagsList = [];

const getSelectedList = () => {
  return selectedFlagsList;
}

const setSelectedList = (id) => {
  selectedFlagsList[id] = true;
}

const unsetSelectedList = (id) => {
  delete selectedFlagsList[id];
}


EventsManager.registerEvent('getSelectedList' ,getSelectedList);
EventsManager.registerEvent('setSelectedList' ,setSelectedList);
EventsManager.registerEvent('unsetSelectedList' ,unsetSelectedList);


const Header = ( {title} ) => (
  <div>
    <div className={styles.wrapper}>      
      <h2>{ title } { process.env.APP_NAME } </h2>
      <ul>
        <li><Link to='/home'>FLAGS</Link></li>
        <li><Link to='/greetings'>SETTINGS</Link></li>       
        <li><Link to='/about'>ABOUT</Link></li>
      </ul>
    </div>
    <GenralPopup showPopup={false} />
  </div>
);
export default Header;