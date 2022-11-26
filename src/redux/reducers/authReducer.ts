import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthReducerState } from '../../../types/types';
import { RootState } from '../store/store';

const initialState: AuthReducerState = {
   isAuthenticated: false,
   status: 'idle',
};

export const loginUser = createAsyncThunk(
   'auth/loginUser',
   async (data, { getState }) => {
      try {
         const state = getState() as RootState;
         //TODO: add additional keys to initial state
         //TODO: create api function to handle request to backend
         console.log('state in loginuser thunk: ', state);
         // const goals = await getGoals(state.user);
         // return goals;
      } catch (err) {
         console.log('err: ', err);
         return err;
      }
   }
);

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      toggleAuthStatus(state, action) {
         state.isAuthenticated = action.payload;
      },
   },
   extraReducers: (builder) => {},
});

//these will create the action object for us so we can dispatch it
export const { toggleAuthStatus } = authSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectAuth = (state: RootState) => state.auth;

//this gets added to store in store.ts
export default authSlice.reducer;
