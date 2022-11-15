import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GlobalUserState, SignupForm } from '../../types/types';
import { RootState } from '../store';

const initialState: GlobalUserState = {
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

//THUNKS
export const createAccount = createAsyncThunk(
   'user/createAccount',
   async (formData: SignupForm, { rejectWithValue }) => {
      try {
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
         };
         //first send req to /api/auth/signup with body of username, password, email
         const response = await fetch(
            'http://192.168.1.8:8080/api/signup',
            requestOptions
         );
         return JSON.stringify(response);
         //then send request to create goals for user (need to create this route)
      } catch (err) {
         console.log('err: ', err);
         return rejectWithValue(err);
      }
   }
);

const userSlice = createSlice({
   name: 'user',
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
      builder.addCase(createAccount.pending, (state, action) => {
         //todo activate loading screen while request is finishing
      }),
         builder.addCase(createAccount.fulfilled, (state, action) => {
            console.log('action in fulfilled add case: ', action.payload);
         }),
         builder.addCase(createAccount.rejected, (state, action) => {
            console.log('action.payload rejected reducer:', action.payload);
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
} = userSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectUser = (state: RootState) => state.user;

//this gets added to store in store.ts
export default userSlice.reducer;
