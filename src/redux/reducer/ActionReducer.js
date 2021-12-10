import ActionTypes from "../constants/ActionTypes";

const initialState = {
  notes: [],
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_NOTE:
      console.log(`payload = ${JSON.stringify(payload)}`);
      return {
        ...state,
        notes: notes.push(JSON.stringify(payload)),
      };
    case ActionTypes.ADD_CHIPS:
      return {
        ...state,
        noteChips: noteChips.push(payload),
      };
    default:
      return state;
  }
};
