import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { BottomTabsParamList } from '../../../../../types/types';
import { CustomScreenContainerItem } from '../../../../components/custom-screen-container-item/CustomScreenContainerItem';
import { useAppSelector } from '../../../../redux/hooks/reduxHooks';
import {
   selectBeginnerPrograms,
   selectProgramCategories,
   selectProgramStatus,
   selectWeightLiftingData,
} from '../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../style/global.styles';

type Props = NativeStackScreenProps<BottomTabsParamList, 'WeightLifting'>;

export const WeightLifting = ({ navigation }: Props) => {
   const hasSelectedProgram = useAppSelector(selectProgramStatus);
   const weightLiftingData = useAppSelector(selectWeightLiftingData);

   const beginnerPrograms = useAppSelector(selectBeginnerPrograms);
   const programCategories = useAppSelector(selectProgramCategories);
   console.log('beginnerPrograms: ', beginnerPrograms);
   console.log('prorgramCategories: ', programCategories);
   return (
      <View>
         {hasSelectedProgram ? null : (
            <>
               <Text>weight lifting screen</Text>
               <View style={global.customScreenContainer}>
                  <CustomScreenContainerItem itemsPerRow={2} gap={10}>
                     <Text>All</Text>
                  </CustomScreenContainerItem>
                  {programCategories.map((category) => (
                     <CustomScreenContainerItem
                        itemsPerRow={2}
                        gap={10}
                        key={category}
                     >
                        <Text>{category}</Text>
                     </CustomScreenContainerItem>
                  ))}
               </View>
            </>
         )}
      </View>
   );
};
