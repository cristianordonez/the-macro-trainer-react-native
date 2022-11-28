import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
   AuthReducerState,
   LoginForm,
   ServerResponseError,
   SignupForm,
} from '../../../types/types';
import { auth } from '../api/auth';
import { RootState } from '../store/store';

const initialState: AuthReducerState = {
   isAuthenticated: false,
   status: 'idle',
};

export const getAuthStatus = createAsyncThunk(
   'auth/getAuthStatus',
   async (data, { rejectWithValue }) => {
      try {
         const response = await auth.checkAuth();
         console.log('statusCode: ', response);
         if (response.status !== 200) {
            const error = await response.json();
            throw { message: error.message, status: response.status };
         } else {
            const data = await response.json();
            data.status = response.status;
            return data;
         }
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
   try {
      const statusCode = await auth.logout();
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

//keep this function alone as passport returns 'unauthorized' in body which is not JSON
export const loginUser = createAsyncThunk(
   'auth/loginUser',
   async (formData: LoginForm, { rejectWithValue }) => {
      try {
         const response = await auth.login(formData);
         if (response.status !== 200) {
            throw {
               message: 'No matching email and password found.',
               status: response.status,
            };
         } else {
            const data = await response.json();
            data.status = response.status;
            return data;
         }
      } catch (err) {
         console.error(err);
         return rejectWithValue(err) as unknown as ServerResponseError;
      }
   }
);

export const createAccount = createAsyncThunk(
   'auth/createAccount',
   async (formData: SignupForm, { rejectWithValue }) => {
      try {
         const response = await auth.createAccount(formData);
         if (response.status !== 201) {
            const error = await response.json();
            throw { message: error.message, status: response.status };
         } else {
            const data = await response.json();
            return data;
         }
      } catch (err) {
         console.error(err);
         return rejectWithValue(err) as unknown as ServerResponseError;
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
      builder
         .addCase(createAccount.pending, (state, action) => {
            state.status = 'loading';
         })
         .addCase(createAccount.fulfilled, (state, action) => {
            console.log('action in fulfilled add case: ', action.payload);
         })
         .addCase(createAccount.rejected, (state, action) => {
            console.log('action.payload rejected reducer:', action.payload);
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
