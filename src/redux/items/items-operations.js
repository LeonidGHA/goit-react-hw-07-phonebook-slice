import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsMockApi from './items-service';

const { fetchGet, fetchPost, fetchDelete } = contactsMockApi;

export const getContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    try {
      const data = await fetchGet();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contact/postContact',

  async contact => {
    try {
      const data = await fetchPost(contact);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async id => {
    try {
      const data = await fetchDelete(id);

      return data.id;
    } catch (error) {
      console.log(error.message);
    }
  }
);
