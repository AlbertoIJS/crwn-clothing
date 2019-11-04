import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

/*
  Reducer: 
    Returns an object with some modifications,
    before passing to the store to update the state

    Return the state if it's unchanged
*/

// Check for user change
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state, // Make a copy of the other props
        currentUser: action.payload, // Change only the props we care about
        error: null // Change the error to null if before was an error
      };

    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
