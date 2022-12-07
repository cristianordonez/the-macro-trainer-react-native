import { WeightLiftingState } from '../../../types/types';

export const weightLiftingData: WeightLiftingState = {
   user: {
      hasSelectedProgram: false,
      selectedProgramId: null,
   },
   data: {
      programs: [
         {
            program_id: 1,
            category: 'nSuns 531 Variants',
            name: 'nSuns 531 LP 4 day Version',
            body: 'The nSuns 531 LP 4 day variation was developed by...',
            workouts: [
               {
                  day: 1,
                  workout_id: 1,
                  exercises: [
                     {
                        exercise_id: 1,
                        name: 'Barbell Bench Press',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 1,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                     {
                        exercise_id: 2,
                        name: 'OHP',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 2,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                  ],
               },
            ],
         },
         {
            program_id: 2,
            category: 'Beginner',
            name: 'StrongLifts 5x5',
            body: 'The StrongLifts 5x5 workout program was designed with beginners in mind to be the ideal combination of basic yet foundational compound exercises to help build muscle, strength and lose fat. To be performed 3 days per week on non-consecutive days, i.e. Mon/Wed/Fri or Tues/Thurs/Sat etc. It consists of two workouts which are alternated.',
            workouts: [
               {
                  day: 1,
                  workout_id: 3,
                  exercises: [
                     {
                        exercise_id: 2,
                        name: 'Barbell Back Squat',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 1,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                     {
                        exercise_id: 1,
                        name: 'Barbell Bench Press',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 1,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                     {
                        exercise_id: 3,
                        name: 'Barbell Row',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 2,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                  ],
               },
               {
                  day: 2,
                  workout_id: 4,
                  exercises: [
                     {
                        exercise_id: 1,
                        name: 'Barbell Bench Press',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 1,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                     {
                        exercise_id: 2,
                        name: 'OHP',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 2,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                  ],
               },
            ],
         },
         {
            program_id: 3,
            category: 'Intermediate',
            name: 'Wendler 531',
            body: 'The Wendler 531 program was developed by...',
            workouts: [
               {
                  day: 1,
                  workout_id: 1,
                  exercises: [
                     {
                        exercise_id: 1,
                        name: 'Barbell Bench Press',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 1,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                     {
                        exercise_id: 2,
                        name: 'OHP',
                        gif: 'this_is_temp_gif',
                        sets: [
                           {
                              index: 2,
                              reps: 8,
                              percentageOf1RM: 65,
                              amrap: false,
                           },
                        ],
                     },
                  ],
               },
            ],
         },
      ],
   },
};
