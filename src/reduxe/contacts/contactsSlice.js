import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsData,
  addContactsData,
  deleteContactsData
} from '../contacts/contactsOperations';
import { Status } from 'config/config';


const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContactsData.pending](state) {
      state.status = Status.loading;
    },
    [fetchContactsData.fulfilled](state, action) {
      state.status = Status.success;
      state.items = [...action.payload];
    },
    [fetchContactsData.rejected](state) {
      state.status = Status.error;
    },
    [addContactsData.pending](state) {
      state.status = Status.loading;
    },
    [addContactsData.fulfilled](state, action) {
      // state.status = Status.success;
      state.items = [...state.items, action.payload];
    },
    [addContactsData.rejected](state) {
      state.status = Status.error;
    },
    [deleteContactsData.pending](state) {
      state.status = Status.loading;
    },
    [deleteContactsData.fulfilled](state, action) {
      // state.status = Status.success;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContactsData.rejected](state) {
      state.status = Status.error;
    },
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     if (
  //       state.items.some(
  //         contact =>
  //           contact.name.toLowerCase() === action.payload.name.toLowerCase()
  //       )
  //     ) {
  //       return alert(`${action.payload.name} is already in contacts`);
  //     }
  //     state.items = [...state.items, action.payload];
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(item => item.id !== action.payload);
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;