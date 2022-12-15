import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { CustomIconCircle } from '../../../../../components/custom-icon-circle/CustomIconCircle';
import { CustomScreenContainerItem } from '../../../../../components/custom-screen-container-item/CustomScreenContainerItem';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { selectProgramsByCategory } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<ChangeProgramsStackType, 'Programs'>;

export const Programs = ({ route, navigation }: Props) => {
   const params = route.params;
   const programs = useAppSelector((state) =>
      selectProgramsByCategory(state, params.category)
   );

   const handleNavigate = (index: number) => {
      if (programs !== null) {
         const programName = programs[index].name;
         navigation.navigate('ProgramDescription', {
            programName,
            category: params.category,
         });
      }
   };

   return (
      <View style={global.screenEven}>
         <View style={global.customScreenContainer}>
            {programs !== null &&
               programs.map((program, index) => (
                  <CustomScreenContainerItem
                     itemsPerRow={2}
                     gap={10}
                     index={index}
                     key={program.program_id}
                     handlePress={handleNavigate}
                  >
                     <CustomIconCircle title={program.name} />
                  </CustomScreenContainerItem>
               ))}
         </View>
      </View>
   );
};
