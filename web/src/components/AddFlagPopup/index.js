import React from 'react';
import styles from './styles.scss';
import { apiUrl } from '../../utils/getParams';
import EventsManager from  '../../containers/EventsManager';
import {Poster} from '../../utils/Poster';

const addFlag = async (closePopup) => {
  const flag = {
    "group": document.getElementById('addFeatureFlag').querySelector("input.group").value,
    "flagName": document.getElementById('addFeatureFlag').querySelector("input.flagName").value ,
    "value": document.getElementById('addFeatureFlag').querySelector("input.value").value,
  };
  const searchResult = await Poster(`${apiUrl}/find`,  {'flagName' : flag.flagName} );  
  if(searchResult.length > 0) {
    EventsManager.callEvent('showPopup')(`Flag with name: ${flag.flagName} already exists!`);
  }
  else {
    const result = await Poster(`${apiUrl}/add`, flag);
    closePopup();
  }
}


const Renderer = ({closePopup}) => {  
  return (
    <div id="addFeatureFlag" className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={ () => { closePopup() } } className={styles.close}>&times;</span>
        <div className={styles.flagProperties}>
          <p><label>FLAG NAME</label> <input className="flagName" type="text" /></p>
          <p><label>GROOUP</label> <input className="group" type="text" /></p>
          <p><label>VALUE</label> <input className="value" type="text" /></p>
          <p><button onClick={ () => { addFlag(closePopup) } }>ADD FLAG</button></p>
        </div>          
      </div>      
    </div>
  );
}

export default Renderer;