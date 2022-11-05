import React, { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import {
   Dimensions,
   FlatList,
   NativeScrollEvent,
   NativeSyntheticEvent,
   SafeAreaView,
} from 'react-native';
import {
   AgeItemType,
   RenderItemType,
   ViewableItems,
} from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { AgeSliderItem } from './AgeSliderItem';

interface Props {
   selectedId: string;
   setSelectedId: Dispatch<SetStateAction<string>>;
}
export const AgeSlider = ({ selectedId, setSelectedId }: Props) => {
   let DATA = [
      {
         id: '0',
         value: '0',
      },
   ];

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

   const viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 100,
      waitForInteraction: true,
   };
   const ref = useRef<FlatList>(null);

   const onViewableItemsChanged = useCallback(
      ({ viewableItems }: ViewableItems) => {
         const itemsInView = viewableItems.filter(
            ({ item }: { item: AgeItemType }) => item.id && item.value
         );
         let currentId;
         console.log('itemsInView.length: ', itemsInView.length);
         if (itemsInView.length === 0) {
            return;
         } else if (itemsInView.length >= 2) {
            currentId = itemsInView[1].item.id;
         } else {
            currentId = itemsInView[0].item.id;
         }
         console.log('itemsInView: ', itemsInView);

         setSelectedId(currentId);
      },
      []
   );

   const updateData = () => {
      let result = [];
      for (let i = 18; i < 100; i++) {
         let currentItem = { id: i + '', value: i + '' };
         result.push(currentItem);
      }
      DATA = result;
   };

   updateData();

   const { width, height } = Dimensions.get('window');

   const ITEM_SIZE = width / 6.38;
   const SPACING = 10;
   const FULL_SIZE = ITEM_SIZE + SPACING * 2;

   const renderItem = ({ item }: RenderItemType) => {
      const opacity = item.id === selectedId ? 1 : 0.5;
      const fontSize = item.id === selectedId ? 20 : 20;
      const paddingRight = item.id === '99' ? 0 : 0;
      return (
         <AgeSliderItem
            item={item}
            setSelectedId={setSelectedId}
            opacity={{ opacity }}
            fontSize={{ fontSize }}
            width={{ width: ITEM_SIZE }}
            height={{ height: 150 }}
            marginHorizontal={{ marginHorizontal: SPACING }}
            paddingRight={{ paddingRight }}
         />
      );
   };

   return (
      <SafeAreaView
         style={[
            global.size,
            // { alignItems: 'center', justifyContent: 'center' },
         ]}
      >
         <FlatList
            data={DATA}
            ref={ref}
            horizontal={true}
            renderItem={renderItem}
            contentContainerStyle={{
               alignItems: 'center',
               justifyContent: 'center',
               // marginHorizontal: SPACING,
               paddingRight: 150,
               paddingLeft: 150,
               // marginRight: 125,
               // paddingLeft: 5,
            }}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={viewabilityConfig}
            decelerationRate='fast'
            onScroll={handleScroll}
            // getItemLayout={(data, index) => ({
            //    length: 75,
            //    offset: 75 * index,
            //    index,
            // })}
            onViewableItemsChanged={onViewableItemsChanged}
            snapToAlignment='center'
            snapToInterval={FULL_SIZE}
         />
      </SafeAreaView>
   );
};
