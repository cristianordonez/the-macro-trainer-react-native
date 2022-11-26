import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const initialState = {
   modalVisible: false,
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      toggleModal(state, action) {
         state.modalVisible = action.payload;
      },
   },
});

//these will create the action object for us so we can dispatch it
export const { toggleModal } = modalSlice.actions;

//this will allow us to get the state when calling useAppSelector
export const selectModal = (state: RootState) => state.modal;

//this gets added to store in store.ts
export default modalSlice.reducer;
