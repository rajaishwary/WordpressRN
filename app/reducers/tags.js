import { RECEIVE_TAGS } from '../actions';

export default function getTags(state = {
   requestingTags: true,
}, action) {
  switch (action.type) {
    case RECEIVE_TAGS:
      return Object.assign({}, state, {
        requestingTags: false,
        data: action.data,
      });
    default:
      return state;
  }
}
