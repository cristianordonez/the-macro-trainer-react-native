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
            name: 'nSuns 531 LP 4 Day Version',
            body: 'The nSuns 531 LP 4 day variation was developed by...',
            progression: [
               {
                  id: 0,
                  description:
                     'If you get 0-1 reps, do not increase training max.',
               },
               {
                  id: 1,
                  description:
                     'If you get 2-3 reps, increase training max by 5-10 lbs.',
               },
               {
                  id: 2,
                  description:
                     'If you get 4-5 reps, increase training max by 10-15 lbs.',
               },
               {
                  id: 3,
                  description:
                     'If you get 5+ reps, increase training max by 15 lbs.',
               },
            ],
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
            body: 'The StrongLifts 5x5 workout program was designed with beginners in mind to be the ideal combination of basic yet foundational compound exercises to help build muscle, strength and lose fat. To be performed 3 days per week on non-consecutive days, i.e. Mon/Wed/Fri or Tues/Thurs/Sat or something similar. It consists of two workouts which are alternated.',

            progression: [
               {
                  id: 0,
                  description:
                     'For upper lifts increase training max by 5 lbs per month.',
               },
               {
                  id: 1,
                  description:
                     'For lower lifts increase training max by 10 lbs per month.',
               },
            ],
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
            progression: [
               {
                  id: 0,
                  description:
                     'If you get 0-1 reps, do not increase training max',
               },
               { id: 1, description: 'If you get 2-3 reps, ' },
            ],

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
               {
                  day: 2,
                  workout_id: 2,
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
                        exercise_id: 4,
                        name: 'Deadlift',
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
