import { UserActionTypes } from './user.types'; 

const INITIAL_STATE = {
  currentUser : null
}

/*
  A "Reducer" checks for every action.
  So we need to make a case for the ones that we care.

  By default it must return the state, 
  if not returns null (which is a valid value)
*/

// Check for user change
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return{
        ...state, // Spreading all of the values
        currentUser: action.payload // Changing the value we care about
      }
    default:
      return state;
  }
}

export default userReducer;