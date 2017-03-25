import { RECEIVE_AVAILABLE_SPORTS } from '../actions';

export default function categoryIndex(state = {
   requestingSports: true,
}, action) {
  switch (action.type) {
    case RECEIVE_AVAILABLE_SPORTS:
      return Object.assign({}, state, {
        requestingSports: false,
        data: action.data,
      });
    default:
      return state;
  }
}
