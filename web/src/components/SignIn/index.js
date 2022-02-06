import React, {Component} from 'react';
import styles from './styles.scss';
import Poster from '../../utils/Poster';
import Cookies from 'universal-cookie';
import { userApiUrl} from '../../utils/getParams';
import MessagePopup from '../MessagePopup';


class SignIn extends Component {

  constructor(props) {    
    super(props);
    this.state = {
      popupVisible: false,
      popupMessage: '',
      logInPopupVisible: true
    }
  }

  closeMessagePopup() {
    this.setState({popupVisible: !this.state.popupVisible});
  }

  showLogInPopup() {
    this.setState({logInPopupVisible: true});
  }

  showSignInPopup() {
    this.setState({logInPopupVisible: false});
  }

  async logIn() {
    if(document.querySelector('input[type="password"][name="password"]').value === '') {
      this.setState({popupMessage: 'Please enter password!'});
      this.setState({popupVisible: true});        
      return;
    }
    if(document.querySelector('input[type="text"][name="email"]').value === '') {
      this.setState({popupMessage: 'Please enter valid e-mail!'});
      this.setState({popupVisible: true});        
      return;
    }

    const postData = {
      email: document.querySelector('input[type="text"][name="email"]').value,
      password: document.querySelector('input[type="password"][name="password"]').value,
    }    
    const result = await Poster(`${userApiUrl}/log-in`, postData);
    const user = JSON.stringify(result);
    const cookies = new Cookies();
    Zcookies.set('user', user, { path: '/' });
  }

  render() {

    const registerUser = async () => {
      if(document.querySelector('input[type="password"][name="password"]').value === '') {
        this.setState({popupMessage: 'Please enter password!'});
        this.setState({popupVisible: true});        
        return;
      }
      if(document.querySelector('input[type="text"][name="email"]').value === '') {
        this.setState({popupMessage: 'Please enter valid e-mail!'});
        this.setState({popupVisible: true});        
        return;
      }
      if(document.querySelector('input[type="text"][name="thermostatId"]').value === '') {
        this.setState({popupMessage: 'Please enter thermostat id!'});
        this.setState({popupVisible: true});        
        return;
      }            
      const postData = {
        email: document.querySelector('input[type="text"][name="email"]').value,
        password: document.querySelector('input[type="password"][name="password"]').value,
        thermostatId: document.querySelector('input[type="text"][name="thermostatId"]').value
      }
      const result = await Poster(`${userApiUrl}/register-user`, postData);
      this.setState({popupMessage: result.message});
      this.setState({popupVisible: true});
    }

    return (
      <div className={styles.wrapper}>
        {!this.state.logInPopupVisible && 
        <div className={['signIn']}>
          <h1>Sign In</h1>
          <div className={styles.userFieldsContainer}>
              <label>User e-mail</label>
              <input type="text" placeholder="Enter Username" name="email" required />

              <label>Password</label>
              <input type="password" placeholder="Enter Password" name="password" required />            

              <label>Thermostat ID</label>
              <input type="text" placeholder="Enter thermostat ID" name="thermostatId" required />            

              <button type="button" onClick={ () => { registerUser() }} >REGISTER</button>
              { this.state.popupVisible && <MessagePopup msg={this.state.popupMessage} closeMessagePopup={ () => this.closeMessagePopup() }/>}

              <p><a href="#" onClick={() =>{ this.showLogInPopup() }}>Log In</a></p>
          </div>
        </div>}

        {this.state.logInPopupVisible && 
        <div className={['LogIn']}>
          <h1>Log In</h1>
            <div className={styles.userFieldsContainer}>
              <label>User e-mail</label>
                <input type="text" placeholder="Enter Username" name="email" required />

                <label>Password</label>
                <input type="password" placeholder="Enter Password" name="password" required /> 

                <button type="button" onClick={ () => { this.logIn() }} >LOG IN</button>    

                <p><a href="#" onClick={() =>{ this.showSignInPopup() }}>Sign In</a></p>                               
            </div>
        </div>}
    </div>)
  }
}

export default SignIn;