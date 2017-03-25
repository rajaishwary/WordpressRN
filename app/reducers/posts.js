import { RECEIVE_POSTS } from '../actions';

export default function getPosts(state = {
   requestingPosts: true,
}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        requestingPosts: false,
        data: action.data,
      });
    default:
      return state;
  }
}
