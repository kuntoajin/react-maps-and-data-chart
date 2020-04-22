const initialState = {
  dataArsir: 0,
  dataNonAriser: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "DATA_ARSIR") {
    return {
      ...state,
      dataArsir: action.value,
    };
  }
  if (action.type === "DATA_NONARSIR") {
    return {
      ...state,
      dataNonAriser: action.value,
    };
  }
};

export default reducer;
