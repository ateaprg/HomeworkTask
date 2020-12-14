import {api} from '../../Utils/api';
import { FETCH_CAMPAIGNS_DATA, 
        FETCH_CAMPAIGNS_DATA_FAILURE, 
        FETCH_CAMPAIGNS_DATA_NOT_FOUND, 
        CAMPAIGNS_NEW_DATA 
      } from "../actions"

export const fetchCampaignData = () => dispatch => {
  api.get('users')
    .then(response => {
      dispatch({
        type: FETCH_CAMPAIGNS_DATA,
        items: response.data
      });
    })
    .catch((err) => {
      if(typeof err.response === 'undefined'){
          dispatch({
              type: FETCH_CAMPAIGNS_DATA_FAILURE,
              error: "Network error, please check server availability"
            })
      } else if(err.response.status === '404') {
          dispatch({
              type: FETCH_CAMPAIGNS_DATA_NOT_FOUND,
              error: 'Data not found'
            })
      } else {
        dispatch({
          type: FETCH_CAMPAIGNS_DATA_NOT_FOUND,
          error: 'Error while getting data'
        })
      }
  })
};
export const addCampaignData = campaignData => dispatch => {
  dispatch({
    type: CAMPAIGNS_NEW_DATA,
    newItems: campaignData
  })
};