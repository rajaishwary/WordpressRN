import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import tags from './tags';

const rootReducer = combineReducers({
    posts,
    categories,
    tags
});

export default rootReducer;