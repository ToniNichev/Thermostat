import React, {Component} from 'react';
import styles from './styles.scss';
import ToggleSwitch from '../ToggleSwitch';
import BulletPoint from '../BulletPoint';
import AddFlagPopup from '../AddFlagPopup';
import {Poster} from '../../utils/Poster';
import EditDelete from '../EditDelete';
import { apiUrl } from '../../utils/getParams';

class Home extends Component {
  
  
  constructor(props) {
    super(props);
    this.getFlags();
    this.addFlagVisible = false;
    this.state = {
      addFlagVisible: false,
      flagEditable: false,
    };
  }  

  addFlag() {
    this.setState({addFlagVisible: true});
  }

  closePopup() {
    this.setState({addFlagVisible: false});    
    this.getFlags();
  }  

  async getFlags() { 
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

  render() {
    const featureFlags = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;

    return (
      <div className={styles.wrapper}>
          <div className={styles.leftRail}>
            <div className={styles.title}>FLAGS</div>
              {featureFlags.map( (flag) => 
                <div key={flag.flagName} className={styles.flagWrapper}>
                  <BulletPoint flagName={flag.flagName} status={this.state.flagEditable} />
                  <span className={styles.flagName}>{flag.flagName}</span>
                  <span className={styles.flagValue}><ToggleSwitch featureFlagName={flag.flagName} val={flag.value} /></span>
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