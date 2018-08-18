import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import * as actions from '../action';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = { modalView: false };

  componentWillMount() {
    _.each(this.props.employee, (value, props) => {
      this.props.employeeUpdate({ props, value });
    });
  }
onPressButton() {
 const { name, phone, shift } = this.props;
 this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
}

textEmployee() {
 const { phone, shift } = this.props;
   Communications.text(phone, `Your upcoming shift is on ${shift}`);
}

onDecline() {
   this.setState({ modalView: false });
}

onAccept() {
  const { uid } = this.props.employee;
  this.props.employeeDelete({ uid });
}

  render() {
    return (
        <Card>
        <EmployeeForm />
        <CardSection>
        <Button onPress={this.onPressButton.bind(this)}>
          Save Changes
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={this.textEmployee.bind(this)}>
          Text Employee
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={() => this.setState({ modalView: !this.state.modalView })}>
          Fire
        </Button>
        </CardSection>

        <Confirm
          visible={this.state.modalView}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>

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

export default connect(mapStateToProps, actions)(EmployeeEdit);
