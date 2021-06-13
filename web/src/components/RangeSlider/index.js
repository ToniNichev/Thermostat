import React from 'react';
import styles from './styles.scss';
import {Poster} from '../../utils/Poster';
import { apiUrl } from '../../utils/getParams';


const handleTemperatureChange = (event) => {
  console.log(event.target.value);
}


const RangeSlider = ({onChangeCallback}) => {
  return (    
    <div>
      <label>Temperature</label>
      <input type="range" min="1" max="100" defaultValue="50" onChange={onChangeCallback}  />
    </div>
  );
}

export default RangeSlider;