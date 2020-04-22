export const SET_MY_USER = "SET_MY_USER";
export const CLEAR_MY_USER = "CLEAR_MY_USER";

export function setMyUser(id) {
  return {
    type: SET_MY_USER,
    id
  };
}

export function clearMyUser() {
  return {
    type: CLEAR_MY_USER
  };
}
