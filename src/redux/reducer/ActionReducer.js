import ActionTypes from "../constants/ActionTypes";

const initialState = {
  notes: [],
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_NOTE:
      console.log(payload);
      return {
        notes: [...state.notes, payload],
      };
    case ActionTypes.EDIT_NOTE:
      console.log(`edit note = ${payload.title} ${payload.content}`);
      var updateElement = {
        note: { title: payload.title, content: payload.content },
      };
      state.notes[payload.id] = updateElement;
      return {
        notes: [...state.notes],
      };
    case ActionTypes.DELETE_NOTE:
      console.log(payload);
      state.notes.splice(payload, 1);
      return {
        notes: [...state.notes],
      };
    // case ActionTypes.ADD_CHIPS:
    //   return {
    //     ...state,
    //     noteChips: noteChips.push(payload),
    //   };
    default:
      return state;
  }
};
