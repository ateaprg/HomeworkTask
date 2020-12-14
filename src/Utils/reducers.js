import { combineReducers } from 'redux';

import campaignsReducer from '../Pages/Campaigns/campaignsReducer';

const reducer = combineReducers({
    campaign: campaignsReducer,
});

export default reducer;
