import {
    FETCH_CAMPAIGNS_DATA,
    FETCH_CAMPAIGNS_DATA_FAILURE
  } from '../actions'

const INITIAL_STATE = { data: [], error: null }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CAMPAIGNS_DATA:
            return {
                ...state,
                data: action.items,
                error: '',
            }
        case FETCH_CAMPAIGNS_DATA_FAILURE:
            return {
                ...state,
                error: action.error,
            };
      default: 
        return state;
    }
  }