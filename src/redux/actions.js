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

export const loadInitialState = () => {
  const storedState = localStorage.getItem('contacts');

  if (storedState) {
    return {
      type: 'LOAD_INITIAL_STATE',
      payload: JSON.parse(storedState),
    };
  }

  return { type: 'DEFAULT_ACTION' };
};
