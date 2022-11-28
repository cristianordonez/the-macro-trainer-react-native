import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthReducerState, LoginForm } from '../../../types/types';
import { auth } from '../api/auth';
import { RootState } from '../store/store';

const initialState: AuthReducerState = {
   isAuthenticated: false,
   status: 'idle',
};

export const loginUser = createAsyncThunk(
   'auth/loginUser',
   async (formData: LoginForm) => {
      try {
         const statusCode = await auth.login(formData);
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

export const checkAuthStatus = createAsyncThunk(
   'auth/checkAuthStatus',
   async (data, { getState }) => {
      try {
         const statusCode = await auth.checkAuth();
         console.log('response in checkauthstatus thunk: ', statusCode);
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
   extraReducers: (builder) => {
      builder
         .addCase(loginUser.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            console.log('state in loginUser: ', state);
            state.status = 'succeeded';
            state.isAuthenticated = true;
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
      builder
         .addCase(checkAuthStatus.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(checkAuthStatus.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.isAuthenticated = true;
         })
         .addCase(checkAuthStatus.rejected, (state, action) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
   },
});

//these will create the action object for us so we can dispatch it
export const { toggleAuthStatus } = authSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectAuth = (state: RootState) => state.auth;

//this gets added to store in store.ts
export default authSlice.reducer;
