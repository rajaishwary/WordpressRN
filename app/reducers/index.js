import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import tags from './tags';
import recent from './recent';
import categorisedPosts from './categorisedPosts';

const rootReducer = combineReducers({
    posts,
    categories,
    tags,
    recent,
    categorisedPosts,
});

export default rootReducer;