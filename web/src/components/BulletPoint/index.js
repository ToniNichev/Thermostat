import React from 'react';
import styles from './styles.scss';
import EventsManager from '../../containers/EventsManager';

const toggleSelect = (element, flagName) => {
  if(element.target.className.search('BulletPoint-flagBuletSelected')) {
    element.target.className = styles.flagBuletSelected;
    EventsManager.callEvent('setSelectedList')(flagName);
  }
  else {
    element.target.className = styles.flagBuletEditable;
    EventsManager.callEvent('unsetSelectedList')(flagName);
  }
}


const BulletPoint = ({status, flagName}) => {  
  return (
    <span>
        {status ? 
            <span className={styles.flagBuletEditable} onClick={ (element) => {toggleSelect(element, flagName)} }></span> :
            <span className={styles.flagBulet }></span>
        }        
        <span className={styles.spacing}></span>
    </span>
  );
}

export default BulletPoint;