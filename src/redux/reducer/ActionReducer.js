import { ConsoleSqlOutlined } from "@ant-design/icons";
import ActionTypes from "../constants/ActionTypes";

const initialState = {
  notes: [],
  search: [],
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_NOTE:
      console.log(payload);
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case ActionTypes.EDIT_NOTE:
      console.log(`edit note = ${payload.title} ${payload.content}`);
      console.log(`edit chips = ${payload.chips}`);
      var updateElement = {
        // ...state,
        note: {
          id: payload.id,
          title: payload.title,
          content: payload.content,
          chips: payload.chips,
        },
      };
      // state.notes[payload.id] = updateElement;
      if (state.search.length > 0) {
        state.search.map((item) => {
          if (item.note.id === payload.id) {
            console.log("udpate search");
            item.note = updateElement.note;
          }
        });
      }
      state.notes.map((item) => {
        if (item.note.id === payload.id) {
          console.log(`item found for update ${payload.id} ${item.note.id}`);
          item.note = updateElement.note;
        }
      });
      return {
        // ...state,
        search: [...state.search],
        notes: [...state.notes],
      };
    case ActionTypes.DELETE_NOTE:
      console.log(`delete - ${payload}`);
      // state.notes.splice(payload, 1);
      // state.notes.filter((item) => item.note.id !== payload);

      if (state.search.length > 0) {
        return {
          search: [...state.search.filter((item) => item.note.id !== payload)],
          notes: [...state.notes.filter((item) => item.note.id !== payload)],
        };
      } else {
        return {
          ...state,
          // notes: [...state.notes],
          notes: [...state.notes.filter((item) => item.note.id !== payload)],
        };
      }
    case ActionTypes.SEARCH:
      console.log(`search action payload - ${payload}`);
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
