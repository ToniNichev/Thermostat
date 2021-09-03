import React, { useState }  from 'react';
import styles from './styles.scss';
import { thermostatApiUrl } from '../../../utils/getParams';
import EventsManager from  '../../../containers/EventsManager';
import {Poster} from '../../../utils/Poster';

let mode = 0;

const AddPopup = ({closePopup}) => {  

  EventsManager.registerEvent('newThermostatAdded' , () => {
    setMsg('New thermostat was successfuly added!');
    setButtonText('DONE');
    mode = 3;
  });

  const [msg, setMsg] = useState('...');
  const [buttonText, setButtonText] = useState('ADD THERMOSTAT');

  const addFlag = async (closePopup) => {

    const apiData = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;
    const hubId = apiData.hubId;

    if(mode == 1) {
      mode = 0;
      setMsg('...');
      setButtonText('ADD THERMOSTAT');      
      closePopup();
    }
    else if(mode == 2) {
      // done 
      mode = 0;
      setMsg('...');
      setButtonText('ADD THERMOSTAT');      
      closePopup();     
      
      fetch(`${thermostatApiUrl}/add-thermostat?data=["${hubId}"]`)
        .then(response => response.json())
        .then(data => { 
          mode = 0;
      });      
    }
    else if(mode == 3) {
      // done 
      mode = 0;
      setMsg('...');
      setButtonText('ADD THERMOSTAT');      
      closePopup();     
    }    
    else if(mode == 0) {
      mode = 1;
      fetch(`${thermostatApiUrl}/add-thermostat?data=["${hubId}"]`)
        .then(response => response.json())
        .then(data => { 
          setMsg('Looking for the new thermostat ...');
          setButtonText('CANCEL');
          mode = 2;
      });
    }
  }
  
  
  return (
    <div id="addFeatureFlag" className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={ () => { closePopup() } } className={styles.close}>&times;</span>
        <div className={styles.flagProperties}>
          <p>{msg}</p>
          <p><button onClick={ () => { addFlag(closePopup) } }>{buttonText}</button></p>
        </div>          
      </div>      
    </div>
  );
}

export default AddPopup;