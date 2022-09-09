import { createSlice } from '@reduxjs/toolkit';

import { getContacts, postContact, deleteContact } from './items-operations';

const initialState = {
  itemsList: [],
  isLoading: false,
};

const itemsSlise = createSlice({
  name: 'items',
  initialState,
  extraReducers: {
    [getContacts.pending]: store => {
      store.isLoading = true;
    },
    [getContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.itemsList = payload;
    },
    [getContacts.rejected]: store => {
      store.isLoading = false;
    },
    [postContact.pending]: store => {
      store.isLoading = true;
    },
    [postContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;

      store.itemsList = [...store.itemsList, payload];
    },
    [postContact.rejected]: store => {
      store.isLoading = false;
    },
    [deleteContact.pending]: store => {
      store.isLoading = true;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.itemsList = store.itemsList.filter(el => el.id !== payload);
    },
    [deleteContact.rejected]: store => {
      store.isLoading = false;
    },
  },
});

export default itemsSlise.reducer;
