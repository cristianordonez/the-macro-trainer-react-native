import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { CurrentWorkoutStackType } from '../../../../../../types/types';

type Props = NativeStackScreenProps<CurrentWorkoutStackType, 'ActiveWorkout'>;

export const ActiveWorkout = ({ navigation }: Props) => {
   return <View></View>;
};
