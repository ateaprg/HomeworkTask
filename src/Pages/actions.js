export const FETCH_CAMPAIGNS_DATA = 'FETCH_CAMPAIGNS_DATA'; 
export const FETCH_CAMPAIGNS_DATA_FAILURE = 'FETCH_CAMPAIGNS_DATA_FAILURE'; 
export const FETCH_CAMPAIGNS_DATA_NOT_FOUND = 'FETCH_CAMPAIGNS_DATA_NOT_FOUND'; 
export const CAMPAIGNS_NEW_DATA = 'CAMPAIGNS_NEW_DATA'; 
export const AddCampaigns = campaignData => ({
    type: CAMPAIGNS_NEW_DATA,
    campaignData
});
export const FILTER_BY_NAME = 'FILTER_BY_NAME'; 
export const filterByName = filterValue => ({
    type: FILTER_BY_NAME,
    filterValue
 });
export const FILTER_BY_END_DATE = 'FILTER_BY_END_DATE'; 
export const filterByEndDate = filterValue => ({
    type: FILTER_BY_END_DATE,
    filterValue
 });
export const FILTER_BY_START_DATE = 'FILTER_BY_START_DATE'; 
export const filterByStartDate = filterValue => ({
    type: FILTER_BY_START_DATE,
    filterValue
 });