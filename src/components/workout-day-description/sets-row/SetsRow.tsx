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
            <View style={{ width: '100%' }} key={set.index}>
               <CustomText
                  h4={true}
                  humanText={`${set.amrap ? `${set.reps}+` : set.reps} x`}
                  fontFamily='Lato_Bold'
               />
               <CustomText
                  h4={false}
                  opacity={true}
                  humanText={`${set.percentageOf1RM}%`}
               />
            </View>
         ))}
      </>
   );
};
