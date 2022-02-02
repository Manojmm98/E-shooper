// it is the combined reducer where we combined all our reducers and pass users to rootreducers

import { combineReducers } from "redux";
import users from "./Users";

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;
