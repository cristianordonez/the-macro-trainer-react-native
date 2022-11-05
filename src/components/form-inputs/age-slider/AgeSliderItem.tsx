import { Text } from '@rneui/themed';
import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import { AgeItemType } from '../../../../types/types';
import { ageSliderStyles } from './styles';

interface Props {
   item: AgeItemType;
   setSelectedId: Dispatch<SetStateAction<string>>;
   opacity: {
      opacity: number;
   };
   fontSize: {
      fontSize: number;
   };
   width: {
      width: number;
   };
   height: {
      height: number;
   };
   marginHorizontal: {
      marginHorizontal: number;
   };
   paddingRight: {
      paddingRight: number;
   };
}
export const AgeSliderItem = ({
   item,
   setSelectedId,
   opacity,
   fontSize,
   width,
   height,
   marginHorizontal,
   paddingRight,
}: Props) => {
   return (
      <TouchableOpacity
         style={[
            paddingRight,
            ageSliderStyles.container,
            width,
            height,
            marginHorizontal,
         ]}
         onPress={() => setSelectedId(item.id)}
      >
         <Text style={[opacity, fontSize]}>{item.value}</Text>
      </TouchableOpacity>
   );
};
