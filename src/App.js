import React from "react";
import Header from "@components/Header/index.js";
import Note from "@components/Note/index.js";
import NoteList from "@components/NoteList/index.js";
import { Provider } from "react-redux";
import store from "./redux/Store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Note />
        <NoteList></NoteList>
      </Provider>
    </>
  );
}
