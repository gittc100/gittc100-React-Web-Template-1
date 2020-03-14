export const TOGGLE_STYLE = 'TOGGLE_STYLE';

const toggleTheme = (state, theme) => {
  console.log("theme",theme);
  return { ...state, theme: theme };
};

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_STYLE:
      return toggleTheme(state, action.theme);
    default:
      return state;
  }
};
