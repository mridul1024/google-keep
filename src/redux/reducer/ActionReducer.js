import ActionTypes from "../constants/ActionTypes";

const initialState = {
  notes: [],
  search: [],
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case ActionTypes.EDIT_NOTE:
      var updateElement = {
        note: {
          id: payload.id,
          title: payload.title,
          content: payload.content,
          chips: payload.chips,
        },
      };
      if (state.search.length > 0) {
        state.search.map((item) => {
          if (item.note.id === payload.id) {
            item.note = updateElement.note;
          }
        });
      }
      state.notes.map((item) => {
        if (item.note.id === payload.id) {
          item.note = updateElement.note;
        }
      });
      return {
        search: [...state.search],
        notes: [...state.notes],
      };
    case ActionTypes.DELETE_NOTE:
      if (state.search.length > 0) {
        return {
          search: [...state.search.filter((item) => item.note.id !== payload)],
          notes: [...state.notes.filter((item) => item.note.id !== payload)],
        };
      } else {
        return {
          ...state,
          notes: [...state.notes.filter((item) => item.note.id !== payload)],
        };
      }
    case ActionTypes.SEARCH:
      let searchedNotes = state.notes.filter((item) =>
        item.note.chips.find((item) => item === payload)
      );
      if (searchedNotes) {
        return {
          ...state,
          search: [
            ...state.notes.filter((item) =>
              item.note.chips.find((item) => item === payload)
            ),
          ],
        };
      } else {
        return {
          ...state,
          search: [],
        };
      }
    default:
      return state;
  }
};
