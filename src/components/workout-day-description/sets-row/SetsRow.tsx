import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { Set } from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { SetsRowStyles } from './styles';

interface Props {
   sets: Set[];
}

export const SetsRow = ({ sets }: Props) => {
   return (
      <>
         {sets.map((set) => (
            <View style={{ width: '100%' }} key={set.index}>
               <Text style={[SetsRowStyles.text, global.textOpacity]}>
                  {set.amrap ? `${set.reps}+` : set.reps} x{' '}
               </Text>
               <Text style={[SetsRowStyles.text, global.textOpacity]}>
                  {set.percentageOf1RM}%
               </Text>
            </View>
         ))}
      </>
   );
};
