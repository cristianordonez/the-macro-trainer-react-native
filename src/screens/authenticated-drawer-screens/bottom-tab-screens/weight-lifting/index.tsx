import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { BottomTabsParamList } from '../../../../../types/types';
import { useAppSelector } from '../../../../redux/hooks/reduxHooks';
import { selectProgramStatus } from '../../../../redux/reducers/weightLiftingReducer';
import { ChangeProgramsStack } from './change-programs-stack';
import { CurrentWorkoutStack } from './current-workout-stack/CurrentWorkoutStack';

type Props = NativeStackScreenProps<BottomTabsParamList, 'WeightLifting'>;

export const WeightLifting = ({ navigation }: Props) => {
   const hasSelectedProgram = useAppSelector(selectProgramStatus);

   return (
      <>
         {hasSelectedProgram ? (
            <CurrentWorkoutStack />
         ) : (
            <ChangeProgramsStack />
         )}
      </>
   );
};
