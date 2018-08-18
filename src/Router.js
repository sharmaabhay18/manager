import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LoginForm from './components/LoginForm';
import Employee from './components/Employee';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { logout } from './action';


class RouterComponent extends Component {

   renderLeftButton() {
     return (
       <TouchableOpacity onPress={() => Actions.employeeCreate()}>
       <Icon name='user-follow' size={20} color='black' style={{ marginLeft: 15 }} />
       </TouchableOpacity>
     );
   }

  renderLogoutButton() {
    return (
      <TouchableOpacity onPress={() => Actions.auth()}>
      <Icon name='logout' size={20} color='black' style={{ marginRight: 15 }} />
      </TouchableOpacity>
    );
  }
  renderBackButton() {
    return (
      <TouchableOpacity onPress={() => Actions.pop()} >
     <Icon name='arrow-left' size={20} color='black' style={{ marginLeft: 15 }} />
     </TouchableOpacity>
    );
  }

  render() {
    console.log('render', this.props);
  return (
    <Router>
    <Scene
     key="root"
     titleStyle={{
       flex: 1,
       textAlign: 'center',
       color: 'black',
       letterSpacing: 1.5
 }}
     titleWrapperStyle={{ alignItems: 'center' }}
     renderLeftButton={() => <View />}
     renderRightButton={() => <View />}
     titleWrapperStyle={{ alignItems: 'center' }}
     hideNavBar
    >
    <Scene key='auth'>
    <Scene
     key='login'
     component={LoginForm}
     title='Login/Register'
     initial
    />
    </Scene>
    <Scene key='main'>
    <Scene
     renderLeftButton={this.renderLeftButton}
     renderRightButton={this.renderLogoutButton}
     key='employeeList'
     component={Employee}
     title='Employees'
    />
    <Scene
     key='employeeCreate'
     component={EmployeeCreate}
     title='Create Employee'
     renderLeftButton={this.renderBackButton}
    />
    <Scene
     key='employeeEdit'
     component={EmployeeEdit}
     title='Edit Employee'
     renderLeftButton={this.renderBackButton}
    />
    </Scene>
    </Scene>
    </Router>
  );
  }
}

export default connect(null, { logout })(RouterComponent);
