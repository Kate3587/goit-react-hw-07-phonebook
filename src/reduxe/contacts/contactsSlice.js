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

});

export default contactsSlice.reducer;