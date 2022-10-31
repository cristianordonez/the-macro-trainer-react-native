import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const Goals = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <Text>goals</Text>
         <Button
            onPress={() => navigation.navigate('ActivityLevel')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
