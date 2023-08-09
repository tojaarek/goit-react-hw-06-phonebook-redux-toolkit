import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, toggleFavorite } from './actions';

if (!localStorage.getItem('contacts')) {
  localStorage.setItem('contacts', JSON.stringify([]));
}
const contactsInStorage = localStorage.getItem('contacts');
const parsedContactsInStorage = JSON.parse(contactsInStorage);
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
