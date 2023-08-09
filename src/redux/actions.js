import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
      favorite: false,
    },
  };
});

export const deleteContact = createAction('contacts/DELETE');

export const toggleFavorite = createAction('contacts/FAVORITE');

export const setStatusFilter = createAction('filters/SET');
