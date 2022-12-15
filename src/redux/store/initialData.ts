import { WeightLiftingState } from '../../../types/types';

export const initialData: WeightLiftingState['data'] = {
   muscles: [
      {
         muscle: '',
         id: 0,
         exercises: [
            {
               id: 0,
               name: '',
               gif: '',
               body_part: '',
               equipment: '',
            },
         ],
      },
   ],
   categories: [
      {
         category_name: 'nSuns 531 Variants',
         category_id: 0,
         programs: [
            {
               program_id: 0,
               is_default: false,
               name: 'nSuns 531 LP 4 Day Variation',
               body: '',
               progression: [
                  {
                     id: 0,
                     description: '',
                     min_rep: 0,
                     max_rep: 0,
                     weight_to_add: 10,
                  },
               ],
               workouts: [
                  {
                     day: 0,
                     week: 0,
                     id: 0,
                     sets: [
                        {
                           amrap: false,
                           reps_target: 5,
                           id: 0,
                           set_number: 0,
                           percentage_rm: 1,
                           weightlifting_exercise: {
                              id: 0,
                              name: 'Barbell bench press',
                              gif: 'temp_gif.gif',
                              body_part: 'upper body',
                              equipment: 'barbell',
                              target_muscle: 'chest',
                           },
                        },
                     ],
                  },
               ],
            },
         ],
      },
   ],
};
