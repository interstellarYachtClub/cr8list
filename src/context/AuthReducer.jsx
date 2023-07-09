const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNEDIN': {
      return {
        currentUser: action.payload,
      };
    }
    case 'SIGNEDOUT': {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
