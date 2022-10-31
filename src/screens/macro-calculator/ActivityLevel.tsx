import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const ActivityLevel = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <Text>activity level</Text>
         <Button
            onPress={() => navigation.navigate('Gender')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
