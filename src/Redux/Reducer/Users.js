// it is the userreducer section where we define our states and create reducer functions where we pass intialstate and action

// if the action type is requested then we will request for the users, if the reuest type is sucess then
import * as type from "../Action/Type";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
        error:null,
      };
    case type.GET_USERS_SUCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
