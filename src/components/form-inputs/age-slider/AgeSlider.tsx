import React, { useCallback, useState } from 'react';
import {
   FlatList,
   NativeScrollEvent,
   NativeSyntheticEvent,
   SafeAreaView,
   ViewToken,
} from 'react-native';
import { AgeItemType } from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { AgeSliderItem } from './AgeSliderItem';
type RenderItemType = {
   item: AgeItemType;
};
export const AgeSlider = () => {
   const [selectedId, setSelectedId] = useState('18');

   let DATA = [
      {
         id: '0',
         value: '0',
      },
   ];

   // (event: NativeSyntheticEvent<NativeScrollEvent>) => void

   const handleScroll = async (
      event: NativeSyntheticEvent<NativeScrollEvent>
   ) => {
      // console.log(
      //    'event.nativeEvent.layoutMeasurement:',
      //    event.nativeEvent.layoutMeasurement
      // );
      // console.log(
      //    'event.nativeEvent.contentOffset: ',
      //    event.nativeEvent.contentOffset
      // );
      // console.log('event.nativeEvent: ', event.nativeEvent);
      const { x } = event.nativeEvent.contentOffset;
      const { height } = event.nativeEvent.layoutMeasurement;
   };

   const renderItem = ({ item }: RenderItemType) => {
      const opacity = item.id === selectedId ? 1 : 0.5;
      const fontSize = item.id === selectedId ? 32 : 20;
      return (
         <AgeSliderItem
            item={item}
            setSelectedId={setSelectedId}
            opacity={{ opacity }}
            fontSize={{ fontSize }}
         />
      );
   };

   const updateData = () => {
      let result = [];
      for (let i = 18; i < 100; i++) {
         let currentItem = { id: i + '', value: i + '' };
         result.push(currentItem);
      }
      DATA = result;
   };

   updateData();

   type ViewableItems = {
      viewableItems: ViewToken[];
   };

   const viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 100,
      waitForInteraction: true,
   };

   const onViewableItemsChanged = useCallback(
      ({ viewableItems }: ViewableItems) => {
         console.log('viewableItems:', viewableItems);
         setSelectedId(viewableItems[0].item.id);
      },
      []
   );

   return (
      <SafeAreaView style={[global.size]}>
         <FlatList
            data={DATA}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            snapToAlignment='center'
            onScroll={handleScroll}
            getItemLayout={(data, index) => ({
               length: 75,
               offset: 75 * index,
               index,
            })}
            centerContent={true}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={viewabilityConfig}
            // snapToInterval={Dimensions.get('window').width / 4}
            onViewableItemsChanged={onViewableItemsChanged}
         />
      </SafeAreaView>
   );
};
