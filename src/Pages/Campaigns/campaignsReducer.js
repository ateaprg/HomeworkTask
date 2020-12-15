import {
    FETCH_CAMPAIGNS_DATA,
    FETCH_CAMPAIGNS_DATA_FAILURE,
    FETCH_CAMPAIGNS_DATA_NOT_FOUND,
    CAMPAIGNS_NEW_DATA,
    FILTER_BY_NAME,
    FILTER_BY_END_DATE,
    FILTER_BY_START_DATE
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
        case FILTER_BY_NAME:
            state.data.forEach( user =>  {
                if(user.name.includes(action.filterValue)) user.filteredOutName = false;
                else user.filteredOutName = true;
            });
            return {
                ...state
            }
        case FILTER_BY_END_DATE:
            state.data.forEach( user =>  {
                if(new Date(user.endDate) <= new Date(action.filterValue)) user.filteredOutEndDate = false;
                else user.filteredOutEndDate = true;
            });
            return {
                ...state
            }
        case FILTER_BY_START_DATE:
            state.data.forEach( user =>  {
                if(new Date(user.startDate) >= new Date(action.filterValue)) user.filteredOutStartDate = false;
                else user.filteredOutStartDate = true;
            });
            return {
                ...state
            }
      default: 
        return state;
    }
  }