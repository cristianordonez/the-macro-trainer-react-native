import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GlobalUserState, SignupForm } from '../../types/types';
import { RootState } from '../store';

const initialState: GlobalUserState = {
   goal: '',
   activityLevel: '',
   gender: '',
   age: 18,
   height: 0,
   heightMetric: 'inch',
   weight: 0,
   weightMetric: 'lb',
};

//THUNKS
export const createAccount = createAsyncThunk(
   'user/createAccount',
   async (data: SignupForm, thunkAPI) => {
      console.log('data in create account thunk: ', data);
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
         console.log('action: ', action);
      }),
         builder.addCase(createAccount.fulfilled, (state, action) => {
            console.log('action.payload: ', action.payload);
         }),
         builder.addCase(createAccount.rejected, (state, action) => {
            console.log('action.payload: ', action.payload);
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
