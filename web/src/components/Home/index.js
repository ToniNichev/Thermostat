import React, {Component} from 'react';
import styles from './styles.scss';
import ToggleSwitch from '../ToggleSwitch';
import BulletPoint from '../BulletPoint';
import AddFlagPopup from '../AddFlagPopup';
import {Poster} from '../../utils/Poster';
import EditDelete from '../EditDelete';
import { apiUrl } from '../../utils/getParams';
import Dialer from '../Dialer';
import RangeSlider from '../RangeSlider';
import TemperatureBar from '../TemperatureBar';

class Home extends Component {
  
  
  constructor(props) {
    super(props);
    this.getThermostatsSettings();
    this.changeRange = [];
    this.setTempAndHumidity = [];
    this.setDialersForTheFirstTime = false;
    this.setThermostatSliderMode = [];
    this.setThermostatFanSliderMode = [];
    this.disableFetchData = false;

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
    const refreshRate = 2000;
    if(this.disableFetchData === true) {
      setTimeout( () => {
        this.fetchData();
      }, refreshRate);
      return;
    }
    console.log("fetch ...");
    fetch(`${process.env.APP_HOST}:${process.env.SERVER_PORT}/thermostat-services/get-full-data`)
      .then(response => response.json())
      .then(data => { 

        for(let i = 0; i < data.length; i ++) {
          const id = data[i].id;
          const curentTemp = data[i].curentTemp;
          const curentHumidity = data[0].humidity;
          const requiredTemp = data[i].requiredTemp;
          const mode = data[i].mode;
          const fanMode = data[i].fanMode;
            if(typeof this.changeRange[i] != 'undefined') {
              this.changeRange[i](requiredTemp);
              this.setTempAndHumidity[i](curentHumidity, curentTemp);
              this.setThermostatSliderMode[i](mode);
              this.setThermostatFanSliderMode[i](fanMode);
            }
        }        
        setTimeout( () => {
          this.fetchData();
        }, refreshRate);        
      });
  }

  disableFetch = (mode) => {
    this.disableFetchData = mode;
  }

  onChangeTemperatureCallback = (thermostatId, requiredTemperature) => {
    fetch(`${process.env.APP_HOST}:${process.env.SERVER_PORT}/thermostat-services/set-desired-temperature?data=[${thermostatId},${requiredTemperature}]`)
      .then(response => response.json())
      .then(data => { 
      });
  }


  onChangeThermostatModeCallback = (thermostatId, requiredMode) => {
    fetch(`${process.env.APP_HOST}:${process.env.SERVER_PORT}/thermostat-services/set-thermostat-mode?data=[${thermostatId},${requiredMode}]`)
      .then(response => response.json())
      .then(data => { 
      });
  }  
  

  onChangeThermostatFanCallback = (thermostatId, requiredMode) => {
    fetch(`${process.env.APP_HOST}:${process.env.SERVER_PORT}/thermostat-services/set-thermostat-fan-mode?data=[${thermostatId},${requiredMode}]`)
      .then(response => response.json())
      .then(data => { 
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
                const key = `thermostat-control-${id}`;
                const thermostatModeKey = "thermostat-mode-${id}";
                const thermostatFanModeKey = "thermostat-fan-mode-${id}";
                const thermostatName = flag.ThermostatName;
                return(
                <div key={key} className={styles.flagWrapper}>
                  <BulletPoint flagName={flag.ThermostatName} status={this.state.flagEditable} />
                  <span>{thermostatName}</span>                  

                  <RangeSlider 
                    min = {1}
                    key={thermostatModeKey}
                    name="thermostat-mode-selector"
                    onChangeCallback={this.onChangeThermostatModeCallback}  
                    SetRangeValue={ (func) => { this.setThermostatSliderMode[id] = func;  } }                     
                    SliderId={id} labels={['OFF', 'COOL', 'HOT']} />

                  <p>FAN MODE</p>
                  <RangeSlider 
                    min={0}
                    key={thermostatFanModeKey}
                    name="thermostat-fan-mode-selector"                
                    onChangeCallback={this.onChangeThermostatFanCallback}  
                    SetRangeValue={ (func) => { this.setThermostatFanSliderMode[id] = func;  } } 
                    SliderId={id} labels={['AUTO', 'LOW', 'HIGH' ]} />                    

                  <Dialer 
                    onChangeCallback={this.onChangeTemperatureCallback} 
                    onEditingMode={this.disableFetch}
                    SliderId={id} 
                    Min='0' 
                    Max='90' 
                    SetRangeValue={ (func) => { this.changeRange[id] = func;  } } 
                    setTempAndHumidity={ (func) => { this.setTempAndHumidity[id] = func;  } } />                  
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