import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import {
        emailUpdate,
        passwordUpdate,
        loginUser
       } from '../action';

class LoginForm extends Component {

  onChangeEmail(text) {
    this.props.emailUpdate(text);
  }

  onChangePassword(text) {
    this.props.passwordUpdate(text);
  }

  onPressButton() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

 renderError() {
  if (this.props.error) {
    return (
    <View>
    <Text style={styles.errorMessageStyle}>
    {this.props.error}
    </Text>
    </View>
    );
  }
 }

renderButton() {
 if (this.props.loading) {
   return <Spinner size="large" />;
 }

 return (
   <Button onPress={this.onPressButton.bind(this)}>Login</Button>
 );
}

  render() {
    return (
      <Card>
      <CardSection>
      <Input
      label='Email'
      placeholder='email@xyz.com'
      onChangeText={this.onChangeEmail.bind(this)}
      value={this.props.email}
      />
      </CardSection>

      <CardSection>
      <Input
      label='Password'
      placeholder='password'
      secureTextEntry
      onChangeText={this.onChangePassword.bind(this)}
      value={this.props.password}
      />
      </CardSection>

      <CardSection>
       {this.renderButton()}
      </CardSection>

         {this.renderError()}

      </Card>
    );
  }
}

const styles = {
errorMessageStyle: {
  alignSelf: 'center',
  fontSize: 20,
  color: 'red'
}
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};


export default connect(mapStateToProps, { emailUpdate, passwordUpdate, loginUser })(LoginForm);
