import React, {Component} from 'react';
import styles from './styles.scss';
import Poster from '../../utils/Poster';
import Cookies from 'universal-cookie';
import { userApiUrl} from '../../utils/getParams';
import MessagePopup from '../MessagePopup';


class SignIn extends Component {

  constructor(props) {    
    super(props);
    if(typeof window !== 'undefined') {
      window.redirect = (hubId) => {
        location.href=`/home?data=["${hubId}"]`;
      }
    }
    this.cookies = new Cookies();
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


  async updateUser() {
          
    const userFromCookie = this.cookies.get('user');
    const postData = {
      password: document.querySelector('input[type="password"][name="password"]').value,
      hubId: document.querySelector('input[type="text"][name="hubId"]').value,

      email: userFromCookie.email,
      accessToken: userFromCookie.accessToken
    }

    const result = await Poster(`${userApiUrl}/update-user`, postData);
    let popupMsg = result.message;
    if(typeof result.errorCode === 'undefined') {
      popupMsg += '<p><button onclick="location.reload()">SIGN IN</button></p>';
    }

    this.setState({popupMessage: popupMessage});
    this.setState({popupVisible: true});
  }

  render() {

    return (
      <div className={styles.wrapper}>
        <div className={['signIn']}>
          <h1>Account</h1>
          <div className={styles.userFieldsContainer}>

              <label>Password</label>
              <input type="password" placeholder="Enter Password" name="password" required />            

              <label>Hub ID</label>
              <input type="text" placeholder="Enter hub ID" name="hubId" required />            

              <button type="button" onClick={ () => { this.updateUser() }} >UPDATE</button>
          </div>
        </div>
        { this.state.popupVisible && <MessagePopup msg={this.state.popupMessage} closeMessagePopup={ () => this.closeMessagePopup() }/>}
    </div>)
  }
}

export default SignIn;