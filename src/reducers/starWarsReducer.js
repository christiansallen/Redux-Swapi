import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetching: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        fetching: false,
        characters: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };

    default:
      return state;
  }
};
