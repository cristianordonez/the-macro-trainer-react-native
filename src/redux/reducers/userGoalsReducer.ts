import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Goals } from '../../../types/types';
import { getGoals } from '../api/goal-api';
import { RootState } from '../store/store';

const initialState: Goals = {
   total_fat: 0,
   total_protein: 0,
   total_carbohydrates: 0,
   total_calories: 0,
   water: 8,
   steps: 10000,
   calories_burned: 250,
   status: 'idle',
};

export const calculateGoals = createAsyncThunk(
   'goals/calculateGoals',
   async (data, { getState }) => {
      try {
         const state = getState() as RootState;
         const goals = await getGoals(state.user);
         return goals;
      } catch (err) {
         console.log('err: ', err);
         return err;
      }
   }
);

//todo thunk that gets users calculated goals from API if they are authenticated

const userGoalsSlice = createSlice({
   name: 'userGoals',
   initialState,
   reducers: {
      resetStatus(state, action) {
         state.status = 'idle';
      },
   },
   extraReducers: (builder) => {
      builder.addCase(calculateGoals.pending, (state, action) => {
         state.status = 'pending';
      }),
         builder.addCase(calculateGoals.fulfilled, (state, action) => {
            const {
               total_calories,
               total_carbohydrates,
               total_fat,
               total_protein,
            } = action.payload;
            state.total_calories = total_calories;
            state.total_carbohydrates = total_carbohydrates;
            state.total_fat = total_fat;
            state.total_protein = total_protein;
            state.status = 'succeeded';
         }),
         builder.addCase(calculateGoals.rejected, (state, action) => {
            state.status = 'failed';
         });
   },
});

//these will create the action object for us so we can dispatch it
export const { resetStatus } = userGoalsSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectGoals = (state: RootState) => state.goal;

//this gets added to store in store.ts
export default userGoalsSlice.reducer;
