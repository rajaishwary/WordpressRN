import { RECEIVE_CATEGORIES } from '../actions';

export default function getCategories(state = {
   requestingCategories: true,
}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        requestingCategories: false,
        data: action.data,
      });
    default:
      return state;
  }
}
