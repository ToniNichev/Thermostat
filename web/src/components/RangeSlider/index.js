import React, { useEffect, useState } from 'react';
import { setThermostatMode } from '../../../expressMiddlewares/thermostatServices/services';
import styles from './styles.scss';


const RangeSlider = ({key, SliderId, labels, onChangeCallback, SetRangeValue}) => {  

  const [state, setSlide] = useState(0);

  const max = labels.length - 1;
  
  const modeChanged = (e) => {
    onChangeCallback(SliderId, e.target.value);
    setSlide(e.target.value);
  }

  const _SetRangeValue = (range) => {
    console.log(">>>range : ", range, key);
    //setSlide(range);
    //document.querySelectorAll('.labelSecondary')[SliderId].innerText = temperature;

  }

  SetRangeValue(_SetRangeValue);

  //setTempAndHumidity(_setTempAndHumidity);  

  return (    
    <div className={styles.wrapper}>
        <div className={styles.labels}>
          {
            labels.map( (label, id) => {
              return(
                <span>{label}</span>
              );
            })
          }        
        </div>
        <input 
          onMouseUp={ (e) => { modeChanged(e) } }
          defaultValue={state}
          type="range" 
          min="0" max={max} />  
    </div>
  );
}

export default RangeSlider;