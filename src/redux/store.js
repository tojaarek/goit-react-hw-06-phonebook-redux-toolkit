import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
