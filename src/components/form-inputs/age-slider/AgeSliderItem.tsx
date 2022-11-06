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
}
export const AgeSliderItem = ({
   item,
   setSelectedId,
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
         onPress={() => setSelectedId(item.id)}
      >
         <Text style={[opacity, fontSize]}>{item.value}</Text>
      </TouchableOpacity>
   );
};
