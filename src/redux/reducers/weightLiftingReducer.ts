import {
   createAsyncThunk,
   createSelector,
   createSlice,
} from '@reduxjs/toolkit';
import {
   Category,
   GlobalWeightLiftingState,
   Program,
   WeightLiftingState,
} from '../../../types/types';
import { apiHandlers } from '../api';
import { initialData } from '../store/initialData';
import { RootState } from '../store/store';

const initialState: GlobalWeightLiftingState = {
   user: {
      hasSelectedProgram: false,
      selectedProgramId: null,
   },
   data: initialData,
   status: 'idle',
};

//todo get all programs from api

export const getInitialWeightLiftingData = createAsyncThunk<
   WeightLiftingState['data'],
   void,
   { state: RootState }
>(
   'weightLifting/getInitialWeightLiftingData',
   async (data, { getState, rejectWithValue }) => {
      const state = getState();
      try {
         const response = await apiHandlers.get('/weightLifting');
         if (!response.ok) {
            const err = await response.json();
            throw { message: err.message, status: response.status };
         } else {
            const initialData = await response.json();
            return initialData;
         }
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

const weightLiftingSlice = createSlice({
   name: 'weightLifting',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getInitialWeightLiftingData.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(getInitialWeightLiftingData.fulfilled, (state, action) => {
            console.log('action.payload: ', action.payload);
            state.data = action.payload;
            state.status = 'succeeded';
         })
         .addCase(getInitialWeightLiftingData.rejected, (state, action) => {
            state.status = 'failed';
         });
   },
});

export const {} = weightLiftingSlice.actions;

export const selectWeightLiftingStatus = (state: RootState) =>
   state.weightLifting.status;

export const selectAllProgramsByCategory = (state: RootState) =>
   state.weightLifting.data.categories;

export const selectProgramStatus = (state: RootState) =>
   state.weightLifting.user.hasSelectedProgram;

export const selectProgramCategoryNames = (state: RootState) => {
   return state.weightLifting.data.categories.map(
      (category) => category.category_name
   );
};

//takes in category name and returns all programs under this category
export const selectProgramsByCategory = createSelector(
   [
      selectAllProgramsByCategory,
      (state: RootState, category_name: Category['category_name']) =>
         category_name,
   ],
   (categories, category_name) => {
      if (category_name === 'All') {
         const allCategories = categories.filter(
            (category) => category.programs !== null
         );
         return allCategories
            .map((category) => {
               return category.programs;
            })
            .flat(1);
      }
      for (let i = 0; i < categories.length; i++) {
         if (categories[i].category_name === category_name) {
            return categories[i].programs;
         }
      }
      return null;
   }
);

//todo takes in category name and program name to return all data for selected program
export const selectProgramDescription = createSelector(
   [
      selectAllProgramsByCategory,
      (
         state: RootState,
         name: Program['name'],
         category: Category['category_name']
      ) => {
         return { name, category };
      },
   ],
   (categories, inputs) => {
      console.log('inputs: ', inputs);
      const { category, name } = inputs;
      const selectedPrograms = categories.filter(
         (currentCategory) => currentCategory.category_name === category
      );
      return selectedPrograms[0].programs.filter(
         (program) => program.name === name
      );
   }
);

// export const selectProgramExercises = createSelector(
//    [selectAllPrograms, (state: RootState, name: Program['name']) => name],
//    (programs, name) => {
//       const program = programs.filter((program) => program.name === name);
//       const exercises = program[0].workouts.map((workout) => {
//          return workout.exercises.map((exercise) => exercise.name);
//       });
//       const result: string[] = [];
//       exercises.forEach((exerciseDay) => {
//          exerciseDay.forEach((exercise) => {
//             if (!result.includes(exercise)) result.push(exercise);
//          });
//       });
//       return result;
//    }
// );

export default weightLiftingSlice.reducer;
