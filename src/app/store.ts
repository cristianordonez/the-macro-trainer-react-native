import { configureStore } from '@reduxjs/toolkit';

// export default configureStore({
//    reducer: {
//       // users: ''//usersreducer''
//       goals: '',
//       activityLevel: '',
//       gender: '',
//       age: 18,
//       numFt: 5,
//       numInch: 0,
//       numCm: 0,
//       heightMetric: 'ft',
//       weight: 0,
//       weightMetric: 'lb',
//       email: '',
//       password: '',
//    },
// });
import userReducer from './reducers/userReducer';

export const store = configureStore({
   reducer: {
      user: userReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
