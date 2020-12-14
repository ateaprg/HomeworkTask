import {api} from '../../Utils/api';
import { FETCH_CAMPAIGNS_DATA, FETCH_CAMPAIGNS_DATA_FAILURE } from "../actions"

export const fetchCampaignsData = () => dispatch => {
  api.get('users')
    .then(response => {
      dispatch({
        type: FETCH_CAMPAIGNS_DATA,
        items: response.data
      });
    })
    .catch(function () {
      dispatch({
        type: FETCH_CAMPAIGNS_DATA_FAILURE,
        // items: response.data
      });
    });
};