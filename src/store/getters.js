import * as types from "./types";

export default {
  [types.GET_USER_DATA]: state => {
    return state.user;
  }
};
