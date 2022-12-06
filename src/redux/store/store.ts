import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import foodLogReducer from '../reducers/foodLogReducer';
import modalReducer from '../reducers/modalReducer';
import userGoalsReducer from '../reducers/userGoalsReducer';
import userMetricsReducer from '../reducers/userMetricsReducer';
import weightLiftingReducer from '../reducers/weightLiftingReducer';

export const store = configureStore({
   reducer: {
      userMetrics: userMetricsReducer,
      userGoals: userGoalsReducer,
      auth: authReducer,
      modal: modalReducer,
      foodLog: foodLogReducer,
      weightLifting: weightLiftingReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
