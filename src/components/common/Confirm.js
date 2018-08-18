import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { containerStyle, textStyle, cardSectionStyle } = style;
  return (
    <Modal
      transform
      animationType='slide'
      visible={visible}
      onRequestClose={() => {}}
    >

     <View style={containerStyle}>
     <CardSection style={cardSectionStyle}>
      <Text style={textStyle}>{children}</Text>
     </CardSection>

     <CardSection>
      <Button onPress={onAccept}>Yes</Button>
    </CardSection>

    <CardSection>
       <Button onPress={onDecline}>No</Button>
    </CardSection>
    </View>

    </Modal>
  );
};

const style = {
   cardSectionStyle: {
      justifyContent: 'center'
   },
   textStyle: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 40
   },
   containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
   }
};

export { Confirm };
