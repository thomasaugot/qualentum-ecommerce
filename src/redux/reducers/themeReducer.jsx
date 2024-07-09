import { TOGGLE_DARK_MODE } from "../actions/actionsTypes";

const initialState = {
  darkMode: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;

export const selectDarkMode = (state) => state.theme.darkMode;
