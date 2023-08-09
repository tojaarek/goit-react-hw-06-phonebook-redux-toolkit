import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, toggleFavorite } from './actions';
import { statusFilter } from './const';
import { setStatusFilter } from './filterSlice';

const contactsInStorage = localStorage.getItem('contacts');
const parsedContactsInStorage = JSON.parse(contactsInStorage);
console.log(contactsInStorage, 'parsed');

if (!parsedContactsInStorage) {
  localStorage.setItem('contacts', JSON.stringify([]));
}

const contactsInitial = parsedContactsInStorage;

export const contactsReducer = createReducer(contactsInitial, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [toggleFavorite]: (state, action) => {
    return state.map(contact => {
      if (contact.id !== action.payload) {
        return contact;
      }
      return { ...contact, favorite: !contact.favorite };
    });
  },
});

const filtersInitial = {
  status: statusFilter,
};

export const filtersReducer = createReducer(filtersInitial, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});
