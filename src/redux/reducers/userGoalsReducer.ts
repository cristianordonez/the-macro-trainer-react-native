import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Goals } from '../../../types/types';
import { userGoals } from '../api/userGoals';
import { RootState } from '../store/store';

const initialState: Goals = {
   total_fat: 0,
   total_protein: 0,
   total_carbohydrates: 0,
   total_calories: 0,
   water: 8,
   steps: 10000,
   calories_to_burn: 250,
   status: 'idle',
};

export const calculateGoals = createAsyncThunk(
   'userGoals/calculateGoals',
   async (data, { getState }) => {
      try {
         const state = getState() as RootState;
         const response = await userGoals.calculate(state.userMetrics);
         if (!response.ok) {
            const err = await response.json();
            throw { message: err.message, status: response.status };
         } else {
            const goals = response.json();
            return goals;
         }
      } catch (err) {
         console.error(err);
         return err;
      }
   }
);

export const getGoals = createAsyncThunk(
   'userGoals/getGoals',
   async (data, { rejectWithValue }) => {
      try {
         const response = await userGoals.get();
         if (!response.ok) {
            const err = await response.json();
            throw { message: err.message, status: response.status };
         } else {
            const goals = response.json();
            return goals;
         }
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

const userGoalsSlice = createSlice({
   name: 'userGoals',
   initialState,
   reducers: {
      resetStatus(state, action) {
         state.status = 'idle';
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(calculateGoals.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(calculateGoals.fulfilled, (state, action) => {
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
         })
         .addCase(calculateGoals.rejected, (state, action) => {
            state.status = 'failed';
         }),
         builder
            .addCase(getGoals.pending, (state, action) => {
               state.status = 'loading';
            })
            .addCase(getGoals.fulfilled, (state, action) => {
               const {
                  steps,
                  calories_to_burn,
                  water,
                  total_calories,
                  total_carbohydrates,
                  total_fat,
                  total_protein,
               } = action.payload;
               state.steps = steps;
               state.calories_to_burn = calories_to_burn;
               state.water = water;
               state.total_calories = total_calories;
               state.total_carbohydrates = total_carbohydrates;
               state.total_fat = total_fat;
               state.total_protein = total_protein;
               state.status = 'succeeded';
            })
            .addCase(getGoals.rejected, (state, action) => {
               state.status = 'failed';
            });
   },
});

//these will create the action object for us so we can dispatch it
export const { resetStatus } = userGoalsSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectGoals = (state: RootState) => state.userGoals;

//this gets added to store in store.ts
export default userGoalsSlice.reducer;
