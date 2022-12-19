import {
   createAsyncThunk,
   createSelector,
   createSlice,
} from '@reduxjs/toolkit';
import {
   GlobalWeightLiftingState,
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
   activeProgram: '',
   activeCategory: '',
   exerciseRepMaxes: [],
};

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
   reducers: {
      updateActiveCategory(state, action) {
         state.activeCategory = action.payload;
      },
      updateActiveProgram(state, action) {
         state.activeProgram = action.payload;
      },
      updateExerciseRepMaxes(state, action) {
         let isPresent = false;
         const currRepMaxes = [...state.exerciseRepMaxes];

         for (let exercise of currRepMaxes) {
            if (exercise.name === action.payload.name) {
               isPresent = true;
               exercise.max = action.payload.max;
            }
         }
         if (!isPresent) {
            currRepMaxes.push(action.payload);
         }
         state.exerciseRepMaxes = currRepMaxes;
      },
   },
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

export const {
   updateActiveCategory,
   updateActiveProgram,
   updateExerciseRepMaxes,
} = weightLiftingSlice.actions;

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

export const selectExerciseRepMaxes = (state: RootState) => {
   return state.weightLifting.exerciseRepMaxes;
};

//takes in category name and returns all programs under this category
export const getProgramsByActiveCategory = createSelector(
   [selectAllProgramsByCategory, (state: RootState) => state],
   (categories, state) => {
      if (state.weightLifting.activeCategory === 'All') {
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
         if (
            categories[i].category_name === state.weightLifting.activeCategory
         ) {
            return categories[i].programs;
         }
      }
      return null;
   }
);

//takes in category name and program name to return all data for selected program
export const getProgramByActiveName = createSelector(
   [
      getProgramsByActiveCategory,
      (state: RootState) => {
         return state;
      },
   ],
   (programs, state) => {
      if (programs !== null && programs.length > 0) {
         return programs.filter(
            (program) => program.name === state.weightLifting.activeProgram
         );
      } else {
         return null;
      }
   }
);

export const getActiveProgramUniqueExercises = createSelector(
   [
      getProgramByActiveName,
      (state: RootState) => {
         return state;
      },
   ],
   (program, state) => {
      const uniqueExercises = new Set();
      if (program !== null) {
         for (let workout of program[0].workouts) {
            for (let exercise of workout.exercises) {
               uniqueExercises.add(exercise.name);
            }
         }
      }
      return Array.from(uniqueExercises) as string[];
   }
);

export default weightLiftingSlice.reducer;
