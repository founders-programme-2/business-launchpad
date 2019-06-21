const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case action.type.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case action.type.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case action.type.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
