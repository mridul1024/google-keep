import { combineReducers } from "redux";
import { noteReducer } from "./ActionReducer";

const reducers = combineReducers({
  note: noteReducer,
});

export default reducers;
