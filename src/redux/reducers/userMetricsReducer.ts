import { createSlice } from '@reduxjs/toolkit';
import { GlobalMetricsState } from '../../../types/types';
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
   isLoggedIn: false,
};

//todo thunk that gets users metrics if they are authenticated
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
   extraReducers: (builder) => {},
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

//this gets added to store in store.ts
export default userMetricsSlice.reducer;
