import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../action';
import { Card, CardSection, Button, Input, Spinner } from './common';


class EmployeeForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
      <Input
      label='Name'
      placeholder='John'
      value={this.props.name}
      onChangeText={value => this.props.employeeUpdate({ props: 'name', value })}
      />
      </CardSection>

      <CardSection>
      <Input
      label='Phone'
      placeholder='555-555-5555'
      value={this.props.phone}
      onChangeText={value => this.props.employeeUpdate({ props: 'phone', value })}
      />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
      <Text style={{ paddingLeft: 20, fontSize: 18 }}>Shift</Text>
      <View style={{ paddingLeft: 14, borderTopColor: '#ddd', borderTopWidth: 1 }}>
      <Picker
      selectedValue={this.props.shift}
      onValueChange={value => this.props.employeeUpdate({ props: 'shift', value })}

      >
      <Picker.Item label="Monday" value="Monday" />
      <Picker.Item label="Tuesday" value="Tuesday" />
      <Picker.Item label="Wednesday" value="Wednesday" />
      <Picker.Item label="Thursday" value="Thursday" />
      <Picker.Item label="Friday" value="Friday" />
      <Picker.Item label="Saturday" value="Saturday" />
      <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
      </View>
      </CardSection>
      </View>
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

export default connect(mapStateToProps, actions)(EmployeeForm);
