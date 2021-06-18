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
    this.changeRange = null;

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



  setThermostatsValue = (e) => {
    this.changeRange = e;
    //console.log("@@@#@#@#:",e );
  }


  fetchData = () => {
    fetch(`${process.env.APP_HOST}:${process.env.SERVER_PORT}/services/thermostats-data`)
      .then(response => response.json())
      .then(data => { 
        //this.setState({thermostats: data});
        this.changeRange(31);

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
              {Thermostats.map( (flag, id) => 
                <div key={flag.flagName} className={styles.flagWrapper}>
                  <BulletPoint flagName={flag.flagName} status={this.state.flagEditable} />
                  <span className={styles.flagName}>{flag.flagName}</span>
                  <hr/>
                  <span className={styles.flagValue}><ToggleSwitch featureFlagName={flag.flagName} val={flag.value} /></span>
                  <RangeSlider SliderId='0' Min='16' Max='40' SetRangeValue={this.setThermostatsValue} />
                  <RangeSlider SliderId='1' Min='0' Max='50' SetRangeValue={ () => {} }  onChangeCallback={ this.onChangeCallback }/>
                  <TemperatureBar temp={ typeof this.state.thermostats[id] == 'undefined' ? 0 : this.state.thermostats[id].curentTemp} />
                  ID: {id}
                </div>
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