// this action will be triggered to get users details
// we will pass the users as a payload to getuser function to get the users

import * as action from "./Type";

function getUsers(users) {
  return {
    type: action.GET_USERS_REQUESTED,
    payload: users,
  };
}

export default getUsers;
