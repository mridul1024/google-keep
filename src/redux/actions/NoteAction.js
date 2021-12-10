import ActionTypes from "../constants/ActionTypes";

export const addNotes = (payload) => {
  return {
    type: ActionTypes.ADD_NOTE,
    payload: payload,
  };
};

export const editNoteState = (payload) => {
  return {
    type: ActionTypes.EDIT_NOTE,
    payload: payload,
  };
};

export const deleteNoteState = (payload) => {
  return {
    type: ActionTypes.DELETE_NOTE,
    payload: payload,
  };
};

export const addChips = (payload) => {
  return {
    type: ActionTypes.ADD_CHIPS,
    payload: payload,
  };
};
