import React from 'react';
import styles from './styles.scss';
import EventsManager from '../../containers/EventsManager';
import GenralPopup from '../GeneralPopup';

const deleteFlags = () => {
  const list = EventsManager.callEvent('getSelectedList')();
  for(var index in list) {
    console.log(">>>", index);
  }
}


const EditDelete = ({flagEditable, editFlag}) => {  
  if(!flagEditable) {
    return (
      <button onClick={() => { editFlag()} }>EDIT</button>
    );
  }
  else {
    return (
      <div>
        <button className={styles.deleteButton} onClick={() => { deleteFlags()} }>DELETE</button>
        <button onClick={() => { editFlag()} }>CANCEL</button>
      </div>
    );
  }

}

export default EditDelete;