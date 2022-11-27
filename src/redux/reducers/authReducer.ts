import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthReducerState, LoginForm } from '../../../types/types';
import { login } from '../api/auth-api';
import { RootState } from '../store/store';

const initialState: AuthReducerState = {
   isAuthenticated: false,
   status: 'idle',
};

export const loginUser = createAsyncThunk(
   'auth/loginUser',
   async (formData: LoginForm, { getState }) => {
      try {
         const statusCode = await login(formData);
         console.log('statusCode: ', statusCode);
         if (statusCode !== 200) {
            throw new Error('Unauthorized');
         } else {
            return statusCode;
         }
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
