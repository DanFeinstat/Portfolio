import { UPDATE_USER, GET_TOOLS } from "../actions/user-actions";

export default function userReducer(state = [], { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case GET_TOOLS:
      return payload.tools;
    default:
      return state;
  }
}
