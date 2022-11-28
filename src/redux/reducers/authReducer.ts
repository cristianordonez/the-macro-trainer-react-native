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

export const getAuthStatus = createAsyncThunk(
   'auth/getAuthStatus',
   async () => {
      try {
         const statusCode = await auth.checkAuth();
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

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
   try {
      const statusCode = await auth.logout();
      console.log('statusCode: ', statusCode);
      if (statusCode !== 200) {
         throw new Error('Unable to logout user.');
      } else {
         return statusCode;
      }
   } catch (err) {
      console.error(err);
      return err;
   }
});

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
            state.status = 'succeeded';
            state.isAuthenticated = true;
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
      builder
         .addCase(getAuthStatus.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(getAuthStatus.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.isAuthenticated = true;
         })
         .addCase(getAuthStatus.rejected, (state, action) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
      builder
         .addCase(logoutUser.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(logoutUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.isAuthenticated = false;
         })
         .addCase(logoutUser.rejected, (state, action) => {
            state.status = 'failed';
            state.isAuthenticated = false;
         });
   },
});

//these will create the action object for us so we can dispatch it
export const { toggleAuthStatus } = authSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthStatus = (state: RootState) => state.auth.status;

//this gets added to store in store.ts
export default authSlice.reducer;
