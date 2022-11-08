import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsData,
  addContactsData,
  deleteContactsData
} from '../contacts/contactsOperations';

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
      state.isLoading = true;
    },
    [fetchContactsData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...action.payload];
    },
    [fetchContactsData.rejected](state, action) {
      state.isLoading = false;
      // state.error = action.payload;
    },
    [addContactsData.pending](state) {
      state.isLoading = true;
    },
    [addContactsData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
    [addContactsData.rejected](state, action) {
      state.isLoading = false;
      // state.error = action.payload;
    },
    [deleteContactsData.pending](state) {
      state.isLoading = true;
    },
    [deleteContactsData.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContactsData.rejected](state) {
      state.isLoading = false;
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