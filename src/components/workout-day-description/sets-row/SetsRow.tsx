import { View } from 'react-native';
import { Set } from '../../../../types/types';
import { CustomText } from '../../custom-text/CustomText';

interface Props {
   sets: Set[];
}

export const SetsRow = ({ sets }: Props) => {
   return (
      <>
         {sets.map((set) => (
            <View key={set.id}>
               <CustomText
                  h5={true}
                  humanText={`${
                     set.amrap ? `${set.reps_target}+` : set.reps_target
                  } x`}
                  fontFamily='Lato_Bold'
               />
               <CustomText
                  h5={true}
                  opacity={true}
                  humanText={`${set.percentage_rm}%`}
               />
            </View>
         ))}
      </>
   );
};
