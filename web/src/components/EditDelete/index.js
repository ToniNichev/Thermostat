import React from 'react';
import styles from './styles.scss';
import EventsManager from '../../containers/EventsManager';
import GenralPopup from '../GeneralPopup';

const deleteFlag = (hubId, deletelist) => {
  const list = JSON.stringify(deletelist);
  fetch(`${process.env.APP_HOST}:${process.env.SERVER_PORT}/thermostat-services/delete-thermostat?data=["${hubId}"]${list}`)
  .then(response => response.json())
  .then(data => {

  });  
}

const deleteFlags = (hubId) => {
  const list = EventsManager.callEvent('getSelectedList')();
  let deletelist = [];
  for(var index in list) {
    if(list[index]) {
      deletelist.push(index);
    }
  }
  deleteFlag(hubId, deletelist);
}


const EditDelete = ({flagEditable, editFlag, hubId}) => {  
  if(!flagEditable) {
    return (
      <button onClick={() => { editFlag()} }>EDIT</button>
    );
  }
  else {
    return (
      <div>
        <button className={styles.deleteButton} onClick={() => { deleteFlags( hubId )} }>DELETE</button>
        <button onClick={() => { editFlag()} }>CANCEL</button>
      </div>
    );
  }

}

export default EditDelete;