import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import * as actions from '../action';

class EmployeeCreate extends Component {

  componentWillMount() {
    console.log(this.props);
     this.props.clearForm();
  }

  onPressButton() {
   const { name, phone, shift } = this.props;
   this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
   console.log('button');
  }

   render() {
     return (
      <Card>
      <EmployeeForm {...this.props} />
      <CardSection>
      <Button
      onPress={() => this.onPressButton()}
      >
      Save
      </Button>
      </CardSection>

      </Card>
     );
   }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeCreate;
  return {
    name,
    phone,
    shift
  };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
