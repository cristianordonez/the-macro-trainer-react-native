import { ExerciseForWorkout } from '../../../types/types';
import { CustomText } from '../custom-text/CustomText';
import { LargeContainer } from '../large-container/LargeContainer';

export const ActiveWorkoutExercise = ({
   id,
   sets,
   name,
   gif_url,
}: ExerciseForWorkout) => {
   console.log('name in activeworkoutexercise component: ', name);
   return (
      <LargeContainer>
         <CustomText humanText={`${name}`} />
      </LargeContainer>
   );
};
