import {
         EMAIL_CHANGED
       }
         from '../action/types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
 };


const textUpdate = (state = initialState, action) => {
  console.log(action);
 switch (action.type) {
   case EMAIL_CHANGED:
    return { ...state, email: action.payload };
   case 'password_changed':
    return { ...state, password: action.payload };
  case 'login_user':
     return { ...state, loading: true, error: '' };
  case 'login_user_passed':
    return { ...state, ...initialState, user: action.payload };
  case 'login_user_failed':
    return { ...state, error: action.payload, loading: false };
  case 'logout_user':
    return { ...state, ...initialState };
  default:
    return state;
 }
};

export default textUpdate;
