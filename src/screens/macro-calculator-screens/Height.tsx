import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const Height = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <Text>height</Text>
         <Button
            onPress={() => navigation.navigate('Weight')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
