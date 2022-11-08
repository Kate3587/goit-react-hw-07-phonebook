// import * as contactsActions from './contactsActions';

// export const fetchAll = () => async dispatch => { 
//     dispatch(contactsActions.fetchContacts())
// };

import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact } from '../../services/Api';

export const fetchContactsData = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContactsData = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await addContact(contact);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContactsData = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);