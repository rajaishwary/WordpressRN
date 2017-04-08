import { RECEIVE_RECENT_POSTS } from '../actions';

export default function getRecentPosts(state = {
   requestingRecentPosts: true,
}, action) {
  switch (action.type) {
    case RECEIVE_RECENT_POSTS:
      return Object.assign({}, state, {
        requestingRecentPosts: false,
        data: action.data,
      });
    default:
      return state;
  }
}
