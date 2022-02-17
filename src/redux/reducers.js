import * as types from "./actions/actionTypes";
const storedToken = localStorage.getItem("token");

let initialState = {
  token: storedToken ? storedToken : "",
};

const authReducer = (state = initialState, action) => {
  if (action.type === types.TOKEN) {
    return {
      ...state,
      token: action.token,
    };
  }

  return state;
  //   if (action.type === types.IS_LOGGEDIN) {
  //     return {
  //       ...state,
  //       isLoggedIn: true,
  //     };
  //   }
};

export default authReducer;
