import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { BottomTabsParamList } from '../../../../../types/types';
import { CustomIconCircle } from '../../../../components/custom-icon-circle/CustomIconCircle';
import { CustomScreenContainerItem } from '../../../../components/custom-screen-container-item/CustomScreenContainerItem';
import { useAppSelector } from '../../../../redux/hooks/reduxHooks';
import {
   selectBeginnerPrograms,
   selectProgramCategories,
   selectProgramStatus,
} from '../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../style/global.styles';

type Props = NativeStackScreenProps<BottomTabsParamList, 'WeightLifting'>;

export const WeightLifting = ({ navigation }: Props) => {
   const hasSelectedProgram = useAppSelector(selectProgramStatus);
   const beginnerPrograms = useAppSelector(selectBeginnerPrograms);
   const programCategories = useAppSelector(selectProgramCategories);
   console.log('beginnerPrograms: ', beginnerPrograms);
   console.log('prorgramCategories: ', programCategories);
   return (
      <View style={global.screenEven}>
         {hasSelectedProgram ? null : (
            <View style={global.customScreenContainer}>
               <CustomScreenContainerItem itemsPerRow={2} gap={10}>
                  <CustomIconCircle title={'All'} />
               </CustomScreenContainerItem>
               {programCategories.map((category) => (
                  <CustomScreenContainerItem
                     itemsPerRow={2}
                     gap={10}
                     key={category}
                  >
                     <>
                        <CustomIconCircle title={category} />
                     </>
                  </CustomScreenContainerItem>
               ))}
            </View>
         )}
      </View>
   );
};
