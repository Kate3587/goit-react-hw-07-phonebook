// import * as contactsActions from './contactsActions';

// export const fetchAll = () => async dispatch => { 
//     dispatch(contactsActions.fetchContacts())
// };

import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact } from '../../services/Api';
// import axios from "axios";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";


// export const fetchContactsData = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get();
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchContactsData = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContactsData = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await addContact(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactsData = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);