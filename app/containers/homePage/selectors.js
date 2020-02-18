/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomepage = state => {
  if (state && state.home) {
    return state.home;
  }
  return initialState;
};

export const makeSelectSample = createSelector(
  selectHomepage,
  state => state.sample,
);
