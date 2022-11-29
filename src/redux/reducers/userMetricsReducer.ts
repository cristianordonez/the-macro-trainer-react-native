import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GlobalMetricsState } from '../../../types/types';
import { userMetrics } from '../api/userMetrics';
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

export const getMetrics = createAsyncThunk(
   'userMetrics/getMetrics',
   async (data, { rejectWithValue }) => {
      try {
         const response = await userMetrics.get();
         if (!response.ok) {
            const err = await response.json();
            throw { message: err.message, status: response.status };
         } else {
            const metrics = await response.json();
            return metrics;
         }
      } catch (err) {
         console.error(err);
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
         .addCase(getMetrics.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(getMetrics.fulfilled, (state, action) => {
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
         .addCase(getMetrics.rejected, (state, action) => {
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
