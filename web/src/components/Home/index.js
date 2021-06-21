import React, {Component} from 'react';
import styles from './styles.scss';
import ToggleSwitch from '../ToggleSwitch';
import BulletPoint from '../BulletPoint';
import AddFlagPopup from '../AddFlagPopup';
import {Poster} from '../../utils/Poster';
import EditDelete from '../EditDelete';
import { apiUrl } from '../../utils/getParams';
import RangeSlider from '../RangeSlider';
import TemperatureBar from '../TemperatureBar';

class Home extends Component {
  
  
  constructor(props) {
    super(props);
    this.getThermostatsSettings();
    this.changeRange = [];

    this.addFlagVisible = false;
    this.state = {
      addFlagVisible: false,
      flagEditable: false,

      thermostats: []
    };
    this.fetchData();
  }  

  addFlag() {
    this.setState({addFlagVisible: true});
  }

  closePopup() {
    this.setState({addFlagVisible: false});    
    this.getThermostatsSettings();
  }  

  async getThermostatsSettings() { 
    // run this only on client side
    if(typeof window == 'undefined')
      return;
    const result = await Poster(`${apiUrl}/get`, {});

    if(JSON.stringify(result) !== JSON.stringify(window.__API_DATA__)) {
      window.__API_DATA__ = result;
      this.forceUpdate();
    } 
  }

  editFlag() {
    this.setState({flagEditable: !this.state.flagEditable});     
  }

  fetchData = () => {
    fetch(`${process.env.APP_HOST}:${process.env.SERVER_PORT}/thermostat-services/get-data`)
      .then(response => response.json())
      .then(data => { 
        //this.setState({thermostats: data});        
        for(let i = 0; i < data.length; i ++) {
          const id = data[i].id;
          const curentTemp = data[i].curentTemp;
          this.changeRange[i](curentTemp);
        }

        setTimeout( () => {
          this.fetchData();
        }, 2000);
      });
  }


  render() {
    const Thermostats = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;
    return (
      <div className={styles.wrapper}>
          <div className={styles.leftRail}>
            <div className={styles.title}>Thermostats</div>
              {Thermostats.map( (flag, flagId) => {
                const id = parseInt(flag.id);
                return(
                <div key={flag.flagName} className={styles.flagWrapper}>
                  <BulletPoint flagName={flag.flagName} status={this.state.flagEditable} />
                  <span className={styles.flagName}>{flag.flagName}</span>
                  <hr/>
                  <span className={styles.flagValue}><ToggleSwitch featureFlagName={flag.flagName} val={flag.value} /></span>
                  <RangeSlider SliderId={id} Min='16' Max='40' SetRangeValue={ (func) => { this.changeRange[id] = func;  } } />                  
                  ID: {id}
                </div>);}
              )}
          </div>      
          <div className={styles.rightRail}>
            <button className={this.state.flagEditable ? styles.addButtonHidden : styles.addButtonVisible } onClick={() => { this.addFlag()} }>ADD</button>
            <EditDelete flagEditable={ this.state.flagEditable } editFlag={ () => { this.editFlag() } } />
          </div>
          {this.state.addFlagVisible ? <AddFlagPopup closePopup={ () => {this.closePopup() } } /> : null}
      </div>
    );
  }

}

export default Home;