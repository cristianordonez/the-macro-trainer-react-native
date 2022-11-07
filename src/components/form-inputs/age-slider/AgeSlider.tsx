import { Text } from '@rneui/themed';
import React, {
   Dispatch,
   SetStateAction,
   useCallback,
   useEffect,
   useRef,
   useState,
} from 'react';
import {
   Dimensions,
   FlatList,
   NativeScrollEvent,
   NativeSyntheticEvent,
   SafeAreaView,
} from 'react-native';
import { RenderItemType } from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { AgeSliderItem } from './AgeSliderItem';
import { ageSliderStyles } from './styles';

interface Props {
   selectedId: string;
   setSelectedId: Dispatch<SetStateAction<string>>;
}
export const AgeSlider = ({ selectedId, setSelectedId }: Props) => {
   const [data, setData] = useState([
      {
         id: '0',
         value: '18',
      },
   ]);

   const { width } = Dimensions.get('window');
   const ITEM_SIZE = width / 6.7;
   const SPACING = 10;
   const FULL_SIZE = ITEM_SIZE + SPACING * 2;

   console.log('width: ', width);
   console.log('ITEM_SIZE: ', ITEM_SIZE);
   console.log('FULL_SIZE: ', FULL_SIZE);
   const handleScroll = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
         const { x } = event.nativeEvent.contentOffset;
         const currentIndex = x / FULL_SIZE;
         console.log('x: ', x);
         setSelectedId(Math.round(currentIndex) + '');
      },
      []
   );

   const viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 100,
      waitForInteraction: true,
   };
   const ref = useRef<FlatList>(null);

   const updateData = () => {
      let result = [];
      for (let i = 18; i < 100; i++) {
         let currentItem = { id: i - 18 + '', value: i + '' };
         result.push(currentItem);
      }
      setData(result);
   };

   useEffect(() => {
      updateData();
   }, []);

   const renderItem = ({ item }: RenderItemType) => {
      const opacity = item.id === selectedId ? 1 : 0.5;
      const fontSize = 24;
      return (
         <AgeSliderItem
            item={item}
            setSelectedId={setSelectedId}
            opacity={{ opacity }}
            fontSize={{ fontSize }}
            width={{ width: ITEM_SIZE }}
            height={{ height: 100 }}
            marginHorizontal={{ marginHorizontal: SPACING }}
         />
      );
   };

   return (
      <SafeAreaView style={[global.containerCenter]}>
         <FlatList
            data={data}
            ref={ref}
            horizontal={true}
            renderItem={renderItem}
            contentContainerStyle={ageSliderStyles.contentContainer}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={viewabilityConfig}
            decelerationRate='fast'
            onScroll={handleScroll}
            getItemLayout={(data, index) => ({
               length: 78,
               offset: 78 * index,
               index,
            })}
            snapToAlignment='center'
            snapToInterval={FULL_SIZE}
         />
         <Text
            style={[global.textCenter, ageSliderStyles.contentContainerText]}
            h4
         >
            Years old
         </Text>
      </SafeAreaView>
   );
};
