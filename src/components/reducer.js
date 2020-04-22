const reducer = (state, action) => {
  if (action.type === "ADD_DATAARSIR") {
    return {
      ...state,
      dataArsir: action.value,
    };
  }

  if (action.type === "ADD_DATANONARSIR") {
    return {
      ...state,
      dataNonArsir: action.value,
    };
  }
  return state;
};

export default reducer;
