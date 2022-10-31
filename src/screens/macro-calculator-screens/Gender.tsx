import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const Gender = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <Text>gender</Text>
         <Button
            onPress={() => navigation.navigate('Age')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
