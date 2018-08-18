import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED
       } from './types';

 const emailUpdate = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text
  };
};

 const passwordUpdate = (text) => {
  return {
    type: 'password_changed',
    payload: text
 };
};

 const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'login_user'
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginSuccessAction(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginSuccessAction(dispatch, user))
      .catch(() => loginFailedAction(dispatch));
    });
  };
};

const loginFailedAction = (dispatch) => {
 dispatch({
   type: 'login_user_failed',
   payload: 'Authentication Failed'
 });
};

const loginSuccessAction = (dispatch, user) => {
  dispatch({
    type: 'login_user_passed',
    payload: user
  });
 Actions.main();
};

const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(() => dispatch({
       type: 'logout_user'
    }).catch((error) => console.log(error)));
  };
};

export { emailUpdate, passwordUpdate, loginUser, logout };
