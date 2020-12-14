import {
    FETCH_CAMPAIGNS_DATA,
    FETCH_CAMPAIGNS_DATA_FAILURE,
    FETCH_CAMPAIGNS_DATA_NOT_FOUND,
    CAMPAIGNS_NEW_DATA
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
        case FETCH_CAMPAIGNS_DATA_NOT_FOUND:
        case FETCH_CAMPAIGNS_DATA_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case CAMPAIGNS_NEW_DATA:
            state.data = state.data.concat(action.newItems)
            return {
                ...state
            };
      default: 
        return state;
    }
  }