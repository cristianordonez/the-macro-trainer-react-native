import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Goals, ServerGoalsResponse } from '../../../types/types';
import { createUrl } from '../../utils/createUrl';
import { apiHandlers } from '../api';
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

export const getInitialGoals = createAsyncThunk<
   ServerGoalsResponse,
   void,
   { state: RootState }
>('userGoals/getInitialGoals', async (data, { rejectWithValue }) => {
   try {
      const response = await apiHandlers.get('/goals');
      if (!response.ok) {
         const err = await response.json();
         throw { message: err.message, status: response.status };
      } else {
         const goals = response.json();
         return goals;
      }
   } catch (err) {
      return rejectWithValue(err);
   }
});

export const calculateGoals = createAsyncThunk<
   ServerGoalsResponse,
   void,
   { state: RootState }
>('userGoals/calculateGoals', async (data, { getState }) => {
   try {
      const state = getState() as RootState;
      const url = createUrl('/goals/calculate', state.userMetrics);
      const response = await apiHandlers.get(url);
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
});

export const saveGoals = createAsyncThunk<
   ServerGoalsResponse,
   void,
   { state: RootState }
>('userGoals/saveGoals', async (data, { rejectWithValue, getState }) => {
   const state = getState();
   try {
      const response = await apiHandlers.post('/goals', state.userGoals);
      if (!response.ok) {
         const err = await response.json();
         throw { message: err.message, status: response.status };
      } else {
         const message = await response.json();
         message.status = response.status;
         return message;
      }
   } catch (err) {
      console.error(err);
      return rejectWithValue(err);
   }
});

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
         });
      builder
         .addCase(getInitialGoals.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(getInitialGoals.fulfilled, (state, action) => {
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
         .addCase(getInitialGoals.rejected, (state, action) => {
            state.status = 'failed';
         });
      builder
         .addCase(saveGoals.fulfilled, (state) => {
            state.status = 'succeeded';
         })
         .addCase(saveGoals.rejected, (state) => {
            state.status = 'failed';
         });
   },
});

//these will create the action object for us so we can dispatch it
export const { resetStatus } = userGoalsSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectGoals = (state: RootState) => state.userGoals;
export const selectGoalsStatus = (state: RootState) => state.userGoals.status;

//this gets added to store in store.ts
export default userGoalsSlice.reducer;
