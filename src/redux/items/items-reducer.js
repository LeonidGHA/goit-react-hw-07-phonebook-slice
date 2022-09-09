import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { getContacts, postContact, deleteContact } from './items-operations';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const isLoading = createReducer(false, {
  [getContacts.fulfilled]: () => false,
  [getContacts.pending]: () => true,
  [getContacts.rejected]: () => false,

  [postContact.fulfilled]: () => false,
  [postContact.pending]: () => true,
  [postContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
});

export default combineReducers({ items, isLoading });
