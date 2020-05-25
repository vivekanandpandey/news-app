import {combineReducers} from 'redux'; 
 import newsReducer from './newsReducer';

 const rootReducer= combineReducers({
    newsFeed:newsReducer
 });
 export default rootReducer;