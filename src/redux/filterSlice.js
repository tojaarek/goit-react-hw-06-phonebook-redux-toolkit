import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './const';

const filtersInitial = {
  status: statusFilters,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitial,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
