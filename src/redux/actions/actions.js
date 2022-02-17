import * as types from "./actionTypes";
import * as functions from "../helpers/functions";

export const login = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    // localStorage.setItem("expirationTime", expirationTime);
  }

  return {
      type: types.TOKEN,
      token: token
  }
};
