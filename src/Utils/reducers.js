import { combineReducers } from 'redux';

import campaignsReducer from '../Pages/Campaigns/campaignsReducer';

const reducer = combineReducers({
    campaigns: campaignsReducer,
});

export default reducer;
