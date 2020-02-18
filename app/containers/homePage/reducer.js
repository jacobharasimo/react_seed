/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { handleActions } from 'redux-actions';
import { loadedSample, loadSample } from './actions';

// The initial state of the Main
export const initialState = {
  sample: null,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = handleActions(
  {
    [loadSample]: produce(draft => {
      draft.sample = initialState.sample;
      return draft;
    }),
    [loadedSample]: produce((draft, action) => {
      draft.sample = action.payload.sample;
      return draft;
    }),
  },
  initialState,
);

export default homeReducer;
