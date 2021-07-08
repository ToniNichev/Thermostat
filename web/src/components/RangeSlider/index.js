import React, { useEffect } from 'react';
import styles from './styles.scss';


const RangeSlider = ({onChangeCallback, SliderId, Min, Max, SetRangeValue, setTempAndHumidity}) => {  

  let beginDrag = false;
  let val = 0;
  const min = parseFloat(Min);
  const max = parseFloat(Max);
  const ratio = 360 / (max - min);

  const rangeSelectorValueChanged = () => {
    const val = document.querySelectorAll('.labelPrimary')[SliderId].innerText;
    onChangeCallback(SliderId, val);
  }  

  const setValue = (val) => {
    const v = parseFloat(val);
    const rotateAngle = (360 / max) * val;
    if(typeof document == 'undefined') return;
    document.querySelectorAll('.labelPrimary')[SliderId].innerText = val;      
    document.querySelectorAll('.circle > .dot')[SliderId].style.transform = `rotate(${rotateAngle}deg)`;
  }

  const _setTempAndHumidity = (humidity, temperature) => {
    document.querySelectorAll('.labelSecondary')[SliderId].innerText = temperature;
  }

  setTempAndHumidity(_setTempAndHumidity);

  SetRangeValue(setValue); // pass setValue to be accessed from parent component.
  

  const mouseMoveAction = (e) => {
    if(beginDrag == false) return;

    const center_x = ( document.querySelectorAll('.circle')[SliderId].offsetWidth / 2) + document.querySelectorAll('.circle')[SliderId].offsetLeft;
    const center_y = ( document.querySelectorAll('.circle')[SliderId].offsetHeight / 2) + document.querySelectorAll('.circle')[SliderId].offsetTop;
    let eventObj;
  
    if(e.touches)
        eventObj = e.touches[0];
    else    
        eventObj = e;
  
    const pos_x = eventObj.pageX;
    const pos_y = eventObj.pageY;
  
  
    const delta_y =  center_y - pos_y;
    const delta_x = center_x - pos_x;
    let angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI) // Calculate Angle between circle center and mouse pos
    angle -= 90;
    if(angle < 0)
        angle = 360 + angle // Always show angle positive
    angle = Math.round(angle);
    document.querySelectorAll('.circle > .dot')[SliderId].style.transform = `rotate(${angle}deg)`;
    
    const m = parseFloat(min);
    const a = Math.round(((angle / ratio) * 100) / 100);

    val = m + a;
    document.querySelectorAll('.labelPrimary')[SliderId].innerText = val;  
  }

  useEffect(() => {
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('touchstart', e => {
      beginDrag = true;
    });    

    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('touchend', e => {
      beginDrag = false;
      rangeSelectorValueChanged();
    });    

    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('mousedown', e => {
      beginDrag = true;
    });

    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('mouseup', e => {
        beginDrag = false;
        rangeSelectorValueChanged();
    });

    document.addEventListener('mousemove', e => {
        mouseMoveAction(e);
    });

    document.addEventListener('touchmove', e => {
      mouseMoveAction(e);
    });  
  });


  return (    
    <div className={styles.wrapper}>

      <div className={[styles.circle, 'circle'].join(' ')}>
        <div className={[styles.labelPrimary, 'labelPrimary'].join(' ')}> -- </div>
        <div className={[styles.labelSecondary, 'labelSecondary'].join(' ')}> -- </div>
        <div className={[styles.dot, 'dot'].join(' ')}></div>
      </div>
    </div>
  );
}

export default RangeSlider;