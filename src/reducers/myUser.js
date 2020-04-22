import { SET_MY_USER, CLEAR_MY_USER } from "../actions/myUser";

export default function myUser(state = null, action) {
  switch (action.type) {
    case SET_MY_USER:
      return action.id;
    case CLEAR_MY_USER:
      return null;
    default:
      return state;
  }
}
