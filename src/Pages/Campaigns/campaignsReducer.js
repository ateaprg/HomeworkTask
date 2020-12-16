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
const reducer = (state = INITIAL_STATE, action) => {
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
            action.campaignData.forEach( user =>  {
                if((!state.nameFilter || (user.name && user.name.toLowerCase().includes(state.nameFilter.toLowerCase())))
                && (!state.endDateFilter || (user.endDate && new Date(user.endDate) <= new Date(state.endDateFilter)))
                && (!state.startDateFilter || (user.endDate && new Date(user.startDate) >= new Date(state.startDateFilter)))) {
                    user.filteredOutName = false;
                }
                else user.filteredOutName = true;
            });
            state.data = state.data.concat(action.campaignData)
            return {
                ...state
            };
        case FILTER_BY_NAME:
            state.data.forEach( user =>  {
                if(user.name && user.name.toLowerCase().includes(action.filterValue.toLowerCase())) user.filteredOutName = false;
                else user.filteredOutName = true;
            });
            return {
                ...state,
                nameFilter: action.filterValue
            }
        case FILTER_BY_END_DATE:
            state.data.forEach( user =>  {
                if(user.endDate && new Date(user.endDate) <= new Date(action.filterValue)) user.filteredOutEndDate = false;
                else user.filteredOutEndDate = true;
            });
            return {
                ...state,
                endDateFilter: action.filterValue
            }
        case FILTER_BY_START_DATE:
            state.data.forEach( user =>  {
                if(user.startDate && new Date(user.startDate) >= new Date(action.filterValue)) user.filteredOutStartDate = false;
                else user.filteredOutStartDate = true;
            });
            return {
                ...state,
                startDateFilter: action.filterValue
            }
      default: 
        return state;
    }
  }
  export default reducer;