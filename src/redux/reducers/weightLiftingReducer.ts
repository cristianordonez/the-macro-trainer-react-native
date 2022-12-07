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

export const selectProgramsByCategory = createSelector(
   [
      selectAllPrograms,
      (state: RootState, category: Program['category']) => category,
   ],
   (programs, category) => {
      if (category === 'All') {
         return programs;
      } else {
         return programs.filter((program) => program.category === category);
      }
   }
);

export default weightLiftingSlice.reducer;
