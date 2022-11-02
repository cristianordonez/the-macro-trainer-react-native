import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { AgeItemType } from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { AgeSliderItem } from './AgeSliderItem';
import { ageSliderStyles } from './styles';
type RenderItemType = {
   item: AgeItemType;
};
export const AgeSlider = () => {
   const [selectedId, setSelectedId] = useState('18');

   let DATA = [
      {
         id: '0',
         title: '0',
      },
   ];

   const renderItem = ({ item }: RenderItemType) => {
      const currentStyle =
         item.id === selectedId
            ? ageSliderStyles.active
            : ageSliderStyles.inactive;
      return (
         <AgeSliderItem
            item={item}
            setSelectedId={setSelectedId}
            currentStyle={currentStyle}
         />
      );
   };

   const updateData = () => {
      let result = [];
      for (let i = 18; i < 100; i++) {
         let currentItem = { id: i + '', title: i + '' };
         result.push(currentItem);
      }
      DATA = result;
   };

   updateData();

   return (
      <SafeAreaView style={[global.size]}>
         <FlatList
            data={DATA}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
         />
      </SafeAreaView>
   );
};
