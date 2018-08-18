import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const employeeUpdate = ({ props, value }) => {
  return {
    type: 'employee_update',
    payload: { props, value }
  };
};
 const employeeCreate = ({ name, phone, shift }) => {
   const { currentUser } = firebase.auth();
   console.log('userd', currentUser);
   return (dispatch) => {
     firebase.database().ref(`/users/${currentUser.uid}/employees`)
     .push({ name, phone, shift })
     .then(() => {
       dispatch({
         type: 'employee_create'
       });
     });
   };
 };

const clearForm = () => {
  return {
    type: 'employee_create'
  };
};

 const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({
        type: 'employee_fetch',
        payload: snapshot.val()
      });
    });
  };
};

const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
     Actions.employeeList();
     dispatch({
       type: 'employee_create'
     });
    });
  };
};

const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(Actions.employeeList());
  };
};

export { employeeDelete, employeeUpdate, employeeCreate, employeeFetch, employeeSave, clearForm };
