import { RECEIVE_CAT_POSTS } from '../actions';

export default function getCatPosts(state = {
   requestingCatPosts: true,
}, action) {
  switch (action.type) {
    case RECEIVE_CAT_POSTS:
      return Object.assign({}, state, {
        requestingCatPosts: false,
        data: action.data,
      });
    default:
      return state;
  }
}
