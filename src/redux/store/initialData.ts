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
               gif_url: '',
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
                     exercises: [
                        {
                           id: 0,
                           name: 'barbell bench press',
                           gif_url: 'sample.gif',
                           sets: [
                              {
                                 amrap: false,
                                 percentage_rm: 0.1,
                                 reps_target: 5,
                                 set_number: 0,
                                 id: 1,
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
         ],
      },
   ],
};
