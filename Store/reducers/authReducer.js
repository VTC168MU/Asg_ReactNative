import User from "../../Models/User";
import { LOGIN, REGISTER } from "../actions/authActions";

const initialState = {
  users: [new User("proit4all@gmail.com", "abc")],
  loginedEmail: "",
};

export default (state = initialState, action) => {
  const { type, user } = action;
  switch (type) {
    case LOGIN:
      const loginedUser = state.users.find(
        (item) => item.email === user.email && item.password === user.password
      );

      return { ...state, loginedEmail: loginedUser ? loginedUser.email : "" };
    case REGISTER:
      return { ...state, users: [...state.users, user] };

    default:
      return state;
  }
};
