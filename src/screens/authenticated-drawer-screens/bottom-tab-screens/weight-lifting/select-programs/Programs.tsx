import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomIconCircle } from '../../../../../components/custom-icon-circle/CustomIconCircle';
import { CustomScreenContainerItem } from '../../../../../components/custom-screen-container-item/CustomScreenContainerItem';
import { global } from '../../../../../style/global.styles';

import { View } from 'react-native';
import { SelectProgramsStack } from '../../../../../../types/types';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { selectProgramsByCategory } from '../../../../../redux/reducers/weightLiftingReducer';

type Props = {
   navigation: NativeStackScreenProps<SelectProgramsStack, 'Programs'>;
   route: any;
};

export const Programs = ({ route, navigation }: Props) => {
   const params = route.params;
   const programs = useAppSelector((state) =>
      selectProgramsByCategory(state, params.category)
   );

   //todo use category in header

   //todo create container for every name returned, and use it to
   //todo navigate to different screen passing down name as param

   const handleNavigate = (index: number) => {};

   return (
      <View style={global.screenEven}>
         <View style={global.customScreenContainer}>
            {programs.map((program, index) => (
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
