import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   GlobalMetricsState,
   MetricsServerResponse,
   ServerGeneralResponse,
} from '../../../types/types';
import { apiHandlers } from '../api';
import { RootState } from '../store/store';

const initialState: GlobalMetricsState = {
   goal: '',
   activityLevel: 1.2,
   gender: '',
   age: 18,
   height: 0,
   heightMetric: 'ft',
   weight: 0,
   weightMetric: 'lb',
   status: 'idle',
};

export const getInitialMetrics = createAsyncThunk<
   MetricsServerResponse,
   void,
   { state: RootState }
>('userMetrics/getInitialMetrics', async (data, { rejectWithValue }) => {
   try {
      const response = await apiHandlers.get('/metrics');
      if (!response.ok) {
         const err = await response.json();
         throw { message: err.message, status: response.status };
      } else {
         const metrics = await response.json();
         return metrics;
      }
   } catch (err) {
      console.error('errr in getmetrics', err);
      return rejectWithValue(err);
   }
});

export const saveUserMetrics = createAsyncThunk<
   ServerGeneralResponse,
   void,
   { state: RootState }
>(
   'userMetrics/saveUserMetrics',
   async (data, { rejectWithValue, getState }) => {
      const state = getState();
      try {
         const response = await apiHandlers.post('/metrics', state.userMetrics);
         if (!response.ok) {
            const err = await response.json();
            throw { message: err.message, status: response.status };
         } else {
            const payload = await response.json();
            payload.status = response.status;
            return payload;
         }
      } catch (err) {
         console.error('errr in getmetrics', err);
         return rejectWithValue(err);
      }
   }
);

const userMetricsSlice = createSlice({
   name: 'userMetrics',
   initialState,
   reducers: {
      updateGoal(state, action) {
         state.goal = action.payload;
      },
      updateActivityLevel(state, action) {
         state.activityLevel = action.payload;
      },
      updateGender(state, action) {
         state.gender = action.payload;
      },
      updateAge(state, action) {
         state.age = action.payload;
      },
      updateHeight(state, action) {
         const { heightMetric, height } = action.payload;
         state.heightMetric = heightMetric;
         state.height = height;
      },
      updateWeight(state, action) {
         const { weight, weightMetric } = action.payload;
         state.weight = weight;
         state.weightMetric = weightMetric;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getInitialMetrics.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(getInitialMetrics.fulfilled, (state, action) => {
            const { height, weight, age, gender, goal, activity_level } =
               action.payload;
            state.height = height;
            state.weight = weight;
            state.age = age;
            state.gender = gender;
            state.goal = goal;
            state.activityLevel = activity_level;
            state.status = 'succeeded';
         })
         .addCase(getInitialMetrics.rejected, (state) => {
            state.status = 'failed';
         });
      builder
         .addCase(saveUserMetrics.fulfilled, (state) => {
            state.status = 'succeeded';
         })
         .addCase(saveUserMetrics.rejected, (state) => {
            state.status = 'failed';
         });
   },
});

//these will create the action object for us so we can dispatch it
export const {
   updateGoal,
   updateActivityLevel,
   updateGender,
   updateAge,
   updateHeight,
   updateWeight,
} = userMetricsSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectUserMetrics = (state: RootState) => state.userMetrics;
export const selectMetricsStatus = (state: RootState) =>
   state.userMetrics.status;

//this gets added to store in store.ts
export default userMetricsSlice.reducer;
