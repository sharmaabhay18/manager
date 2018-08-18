const initialState = {
  name: '',
  phone: '',
  shift: '',
  employees: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'employee_update':
    return { ...state, [action.payload.props]: action.payload.value };
    case 'employee_create':
    return { ...state, name: '', phone: '', shift: '' };
    case 'employee_fetch':
    return { ...state, employees: action.payload };
    default:
    return state;

  }
};
