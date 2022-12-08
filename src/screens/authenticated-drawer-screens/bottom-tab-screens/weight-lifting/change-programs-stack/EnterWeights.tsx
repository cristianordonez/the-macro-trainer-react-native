import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { selectProgramExercises } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<ChangeProgramsStackType, 'EnterWeights'>;

export const EnterWeights = ({ navigation, route }: Props) => {
   const programName = route.params.programName;

   const exercises = useAppSelector((state) =>
      selectProgramExercises(state, programName)
   );
   console.log('exercises: ', exercises);

   //todo create new selector that gets all unique exercises for program given program name
   return (
      <View style={global.screenEven}>
         <Text h4>Enter training maxes </Text>
         {exercises.map((exercise) => (
            <View key={exercise} style={global.largeContainer}>
               <Text>{exercise}</Text>
            </View>
         ))}
      </View>
   );
};
