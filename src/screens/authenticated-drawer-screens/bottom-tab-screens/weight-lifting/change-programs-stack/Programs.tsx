import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { CustomIconCircle } from '../../../../../components/custom-icon-circle/CustomIconCircle';
import { CustomScreenContainerItem } from '../../../../../components/custom-screen-container-item/CustomScreenContainerItem';
import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../redux/hooks/reduxHooks';
import {
   getProgramsByActiveCategory,
   updateActiveProgramId,
} from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<ChangeProgramsStackType, 'Programs'>;

export const Programs = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();
   const programs = useAppSelector((state) =>
      getProgramsByActiveCategory(state)
   );

   const handleNavigate = (index: number) => {
      if (programs !== null) {
         const programName = programs[index].name; //name used for header
         const programId = programs[index].program_id; //id used for global state
         dispatch(updateActiveProgramId(programId));
         navigation.navigate('ProgramDescription', {
            programName,
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
