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
}
export const AgeSliderItem = ({
   item,
   setSelectedId,
   opacity,
   fontSize,
}: Props) => {
   return (
      <TouchableOpacity
         style={ageSliderStyles.container}
         onPress={() => setSelectedId(item.id)}
      >
         <Text style={[opacity, fontSize]}>{item.value}</Text>
      </TouchableOpacity>
   );
};
