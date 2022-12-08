import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SelectProgramsStack } from '../../../../../../types/types';
import { CustomIconCircle } from '../../../../../components/custom-icon-circle/CustomIconCircle';
import { CustomScreenContainerItem } from '../../../../../components/custom-screen-container-item/CustomScreenContainerItem';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { selectProgramNamesByCategory } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<SelectProgramsStack, 'Programs'>;

export const Programs = ({ route, navigation }: Props) => {
   const params = route.params;
   const programs = useAppSelector((state) =>
      selectProgramNamesByCategory(state, params.category)
   );

   const handleNavigate = (index: number) => {
      const programName = programs[index];
      navigation.navigate('ProgramDescription', {
         programName,
      });
   };

   return (
      <View style={global.screenEven}>
         <View style={global.customScreenContainer}>
            {programs.map((program, index) => (
               <CustomScreenContainerItem
                  itemsPerRow={2}
                  gap={10}
                  index={index}
                  key={program}
                  handlePress={handleNavigate}
               >
                  <CustomIconCircle title={program} />
               </CustomScreenContainerItem>
            ))}
         </View>
      </View>
   );
};
