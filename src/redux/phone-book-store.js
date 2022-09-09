import { configureStore } from '@reduxjs/toolkit';

import todosReduser from './root-reducer/root-reducer';

export const store = configureStore({
  reducer: {
    contacts: todosReduser,
  },
});
