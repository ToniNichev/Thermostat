import React, { useEffect } from 'react';
import styles from './styles.scss';


const RangeSlider = ({SliderId, labels, onChangeCallback}) => {  

  const max = labels.length - 1;
  
  const modeChanged = (e) => {
    onChangeCallback(SliderId, e.target.value);
  }

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
          onChange={ (e) => { modeChanged(e) } }
          type="range" 
          id="vol" name="vol" 
          min="0" max={max} />
    </div>
  );
}

export default RangeSlider;