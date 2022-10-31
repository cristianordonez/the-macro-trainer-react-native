import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const Age = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <Text>age</Text>
         <Button
            onPress={() => navigation.navigate('Height')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
