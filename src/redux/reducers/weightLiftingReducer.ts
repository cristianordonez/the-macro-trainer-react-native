import { createSelector, createSlice } from '@reduxjs/toolkit';
import { GlobalWeightLiftingState } from '../../../types/types';
import { weightLiftingData } from '../store/sampleWeightLiftingData';
import { RootState } from '../store/store';

console.log('weightLiftingData in reducer: ', weightLiftingData);
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

export const selectWeightLiftingData = (state: RootState) =>
   state.weightLifting.data;

export const selectBeginnerPrograms = createSelector(
   (state: RootState) => state.weightLifting.data.programs,
   (programs) => programs.filter((program) => program.category === 'Beginner')
);

export const selectProgramCategories = createSelector(
   (state: RootState) => state.weightLifting.data.programs,
   (programs) => programs.map((program) => program.category)
);

export default weightLiftingSlice.reducer;
