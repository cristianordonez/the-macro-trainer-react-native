import { createSelector, createSlice } from '@reduxjs/toolkit';
import { GlobalWeightLiftingState, Program } from '../../../types/types';
import { weightLiftingData } from '../store/sampleWeightLiftingData';
import { RootState } from '../store/store';

const initialState: GlobalWeightLiftingState = {
   user: weightLiftingData.user,
   data: weightLiftingData.data,
   status: 'idle',
};

const weightLiftingSlice = createSlice({
   name: 'weightLifting',
   initialState,
   reducers: {},
   extraReducers: (builder) => {},
});

export const {} = weightLiftingSlice.actions;

export const selectProgramStatus = (state: RootState) =>
   state.weightLifting.user.hasSelectedProgram;

export const selectAllPrograms = (state: RootState) =>
   state.weightLifting.data.programs;

export const selectAllProgramCategories = createSelector(
   (state: RootState) => state.weightLifting.data.programs,
   (programs) => programs.map((program) => program.category)
);

export const selectProgramNamesByCategory = createSelector(
   [
      selectAllPrograms,
      (state: RootState, category: Program['category']) => category,
   ],
   (programs, category) => {
      if (category === 'All') {
         return programs.map((program) => program.name);
      } else {
         const matchingPrograms = programs.filter(
            (program) => program.category === category
         );
         return matchingPrograms.map((program) => program.name);
      }
   }
);

export const selectProgramById = createSelector(
   [selectAllPrograms, (state: RootState, name: Program['name']) => name],
   (programs, name) => programs.filter((program) => program.name === name)
);

export default weightLiftingSlice.reducer;
