import React, { useEffect } from 'react';
import styles from './styles.scss';


let beginDrag = false;
let val = 0;
let sliderId = 0;

const mouseMoveAction = (e) => {
  if(beginDrag == false) return;
  const center_x = ( document.querySelector('.circle').offsetWidth / 2) + document.querySelector('.circle').offsetLeft;
  const center_y = ( document.querySelector('.circle').offsetHeight / 2) + document.querySelector('.circle').offsetTop;
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
  document.querySelector('.dot').style.transform = `rotate(${angle}deg)`;
  
  val = angle;
  document.querySelector('.label').innerText = val;  
}



const RangeSlider = ({onChangeCallback, SliderId}) => {  
  sliderId = sliderId;
  useEffect(() => {
    document.querySelector('.dot').addEventListener('touchstart', e => {
      beginDrag = true;
    });    

    document.querySelector('.dot').addEventListener('touchend', e => {
      beginDrag = false;
    });    

    document.querySelector('.dot').addEventListener('mousedown', e => {
      beginDrag = true;
    });

    document.querySelector('.dot').addEventListener('mouseup', e => {
        beginDrag = false;
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
      <div className={styles.temperatureText}>128.34</div>
      <div className={[styles.circle, 'circle'].join(' ')}>
        <div className={[styles.label, 'label'].join(' ')}> -- </div>
        <div className={[styles.dot, 'dot'].join(' ')}></div>
      </div>
    </div>
  );
}

export default RangeSlider;