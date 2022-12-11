import { Text } from '@rneui/themed';
import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import { AgeItemType } from '../../../../types/types';
import { ageSliderStyles } from './styles';

interface Props {
   item: AgeItemType;
   setSelectedVal: Dispatch<SetStateAction<string>>;
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
}
export const AgeSliderItem = ({
   item,
   setSelectedVal,
   opacity,
   fontSize,
   height,
   width,
   marginHorizontal,
}: Props) => {
   return (
      <TouchableOpacity
         style={[
            ageSliderStyles.sliderItemContainer,
            height,
            width,
            marginHorizontal,
         ]}
         onPress={() => setSelectedVal(item.value)}
      >
         <Text style={[opacity, fontSize, { fontFamily: 'Lato' }]}>
            {item.value}
         </Text>
      </TouchableOpacity>
   );
};
