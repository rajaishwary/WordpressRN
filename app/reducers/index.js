import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import tags from './tags';
import recent from './recent';

const rootReducer = combineReducers({
    posts,
    categories,
    tags,
    recent
});

export default rootReducer;