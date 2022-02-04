import React, {Component} from 'react';
import styles from './styles.scss';
import Poster from '../../utils/Poster';
import { userApiUrl} from '../../utils/getParams';


class SignIn extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const registerUser = async () => {
      const postData = {one : 1}
      const result = await Poster(`${userApiUrl}/register-user`, postData);
    }

    return (
      <div className={styles.wrapper}>
        <h1>SignIn</h1>
        <div className={styles.userFieldsContainer}>
            <label>User e-mail</label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label>Password</label>
            <input type="password" placeholder="Enter Password" name="uname" required />            

            <label>Thermostat ID</label>
            <input type="text" placeholder="Enter thermostat ID" name="uname" required />            

            <button type="button" onClick={ () => { registerUser() }} >REGISTER</button>
        </div>
        <hr/>
    </div>)
  }
}

export default SignIn;