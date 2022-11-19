import { Text } from '@rneui/themed';
import * as Haptics from 'expo-haptics';
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
   selectedVal: string;
   setSelectedVal: Dispatch<SetStateAction<string>>;
}
export const AgeSlider = ({ selectedVal, setSelectedVal }: Props) => {
   const ref = useRef<FlatList>(null);
   const [data, setData] = useState([
      {
         index: '0',
         value: '18',
      },
   ]);
   const { width } = Dimensions.get('window');
   const ITEM_SIZE = width / 6.7;
   const SPACING = 10;
   const FULL_SIZE = ITEM_SIZE + SPACING * 2;

   const handleScroll = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
         const { x } = event.nativeEvent.contentOffset;
         const currentIndex = x / FULL_SIZE;
         setSelectedVal(Math.round(currentIndex + 18) + '');
      },
      []
   );

   const updateData = () => {
      let result = [];
      for (let i = 18; i < 100; i++) {
         let currentItem = { index: i - 18 + '', value: i + '' };
         result.push(currentItem);
      }
      setData(result);
   };

   useEffect(() => {
      updateData();
   }, []);

   useEffect(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
   }, [selectedVal]);

   const renderItem = ({ item }: RenderItemType) => {
      const opacity = item.value === selectedVal ? 1 : 0.5;
      const fontSize = 24;
      return (
         <AgeSliderItem
            item={item}
            setSelectedVal={setSelectedVal}
            opacity={{ opacity }}
            fontSize={{ fontSize }}
            width={{ width: ITEM_SIZE }}
            height={{ height: 100 }}
            marginHorizontal={{ marginHorizontal: SPACING }}
         />
      );
   };

   const viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 100,
      waitForInteraction: true,
   };

   return (
      <SafeAreaView style={[global.containerCenter]}>
         <FlatList
            data={data}
            ref={ref}
            horizontal={true}
            renderItem={renderItem}
            contentContainerStyle={ageSliderStyles.contentContainer}
            keyExtractor={(item) => item.index}
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
