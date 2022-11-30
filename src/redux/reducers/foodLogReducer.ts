import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   GlobalFoodLogState,
   ServerFoodLogResponse,
} from '../../../types/types';
import { createUrl } from '../../utils/createUrl';
import { apiHandlers } from '../api';
import { RootState } from '../store/store';

const initialState: GlobalFoodLogState = {
   currentDate: new Date().toLocaleDateString('en-us', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
   }),
   itemsToday: [],
   nutritionSummaryToday: {
      total_calories: 0,
      total_carbohydrates: 0,
      total_fat: 0,
      total_protein: 0,
   },
   itemsAlternateDate: [],
   nutritionSummaryAlternateDate: {},
   searchResults: [],
   status: 'idle',
};

export const getInitialFoodLogData = createAsyncThunk<
   ServerFoodLogResponse,
   void,
   { state: RootState }
>(
   'foodLog/getInititalFoodLogData',
   async (data, { getState, rejectWithValue }) => {
      const state = getState();
      const url = createUrl('/foodLog/day', {
         date: state.foodLog.currentDate,
      });
      try {
         const response = await apiHandlers.get(url);
         if (!response.ok) {
            const err = await response.json();
            throw { message: err.message, status: response.status };
         } else {
            const foodLogData = await response.json();
            return foodLogData;
         }
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

//todo fix this thunk
export const getFoodLogItemsByDate = createAsyncThunk<
   ServerFoodLogResponse,
   string,
   { state: RootState }
>(
   'foodLog/getFoodLogItemsByDate',
   async (date: string, { rejectWithValue }) => {
      try {
         const url = createUrl('/foodLog/day', { date });

         const response = await apiHandlers.get(url);
         if (!response.ok) {
            const err = await response.json();
            throw { message: err.message, status: response.status };
         } else {
            const foodLogData = await response.json();
            return foodLogData;
         }
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

const foodLogSlice = createSlice({
   name: 'foodLog',
   initialState,
   reducers: {
      updateDate(state, action) {
         const { date } = action.payload;
         state.currentDate = date;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getInitialFoodLogData.fulfilled, (state, action) => {
            const { foodLogItems, nutritionSummary } = action.payload;
            state.itemsToday = foodLogItems;
            state.nutritionSummaryToday = nutritionSummary;
         })
         .addCase(getInitialFoodLogData.rejected, (state, action) => {
            state.status = 'failed';
         });
   },
});

export const { updateDate } = foodLogSlice.actions;

export const selectFoodLog = (state: RootState) => state.foodLog;
export const selectNutritionSummaryToday = (state: RootState) =>
   state.foodLog.nutritionSummaryToday;
export const selectFoodLogItemsToday = (state: RootState) =>
   state.foodLog.itemsToday;
export const selectFoodLogStatus = (state: RootState) => state.foodLog.status;

export default foodLogSlice.reducer;
