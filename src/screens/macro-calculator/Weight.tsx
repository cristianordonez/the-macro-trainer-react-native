import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const Weight = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <Text>weight</Text>
         <Button
            onPress={() => navigation.navigate('Home')}
            title={`Complete`}
            size='lg'
         />
      </View>
   );
};
