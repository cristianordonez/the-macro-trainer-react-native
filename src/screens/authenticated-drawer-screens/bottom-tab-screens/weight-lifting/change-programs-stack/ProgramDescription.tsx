import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { CustomText } from '../../../../../components/custom-text/CustomText';
import { WorkoutDayDescription } from '../../../../../components/workout-day-description/WorkoutDayDescription';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { getProgramByActiveId } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<
   ChangeProgramsStackType,
   'ProgramDescription'
>;

export const ProgramDescription = ({ route, navigation }: Props) => {
   const { programName } = route.params;
   const program = useAppSelector((state) => getProgramByActiveId(state));

   let currentProgram;
   if (program !== null) {
      currentProgram = program[0];
   }

   const handlePress = () => {
      navigation.navigate('EnterWeights', {
         programName,
      });
   };

   if (currentProgram !== undefined) {
      return (
         <>
            <ScrollView contentContainerStyle={global.scrollableContainer}>
               <View
                  style={{
                     flex: 1,
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <CustomText
                     h2={true}
                     gap={true}
                     textAlign='left'
                     humanText={currentProgram.body}
                  />
                  {currentProgram.progression.map((item) => (
                     <View
                        style={[
                           global.rowCenter,
                           global.gap,
                           { alignSelf: 'flex-start', width: '100%' },
                        ]}
                        key={item.id}
                     >
                        <CustomText
                           h2={true}
                           humanText={` ${'\u2022' + ' '}${item.description}`}
                        />
                     </View>
                  ))}
                  <View style={{ justifyContent: 'space-evenly' }}>
                     {currentProgram.workouts.map((workout, index) => (
                        <WorkoutDayDescription
                           key={workout.id}
                           exercises={workout.exercises}
                           day={workout.day}
                           id={workout.id}
                           week={workout.week}
                        />
                     ))}
                  </View>
                  <Button style={{ marginTop: 10 }} onPress={handlePress}>
                     Enter weights and start
                  </Button>
               </View>
            </ScrollView>
         </>
      );
   } else {
      return null;
   }
};
