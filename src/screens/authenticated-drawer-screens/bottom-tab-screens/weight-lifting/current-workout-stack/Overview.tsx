import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { CurrentWorkoutStackType } from '../../../../../../types/types';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { getProgramByUserSelectedId } from '../../../../../redux/reducers/weightLiftingReducer';

type Props = NativeStackScreenProps<CurrentWorkoutStackType, 'Overview'>;

export const Overview = ({ navigation }: Props) => {
    const program = useAppSelector(getProgramByUserSelectedId);
    //todo render all workouts
   console.log('program[0]: ', program[0]);

   return <View></View>;
};
 