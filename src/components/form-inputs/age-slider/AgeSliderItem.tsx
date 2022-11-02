import { Text } from '@rneui/themed';
import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import { AgeItemType } from '../../../../types/types';
import { ageSliderStyles } from './styles';

interface Props {
   item: AgeItemType;
   setSelectedId: Dispatch<SetStateAction<string>>;
   currentStyle: { opacity: number; fontSize: number };
}
export const AgeSliderItem = ({ item, setSelectedId, currentStyle }: Props) => {
   return (
      <TouchableOpacity
         style={ageSliderStyles.container}
         onPress={() => setSelectedId(item.id)}
      >
         <Text style={currentStyle}>{item.title}</Text>
      </TouchableOpacity>
   );
};
