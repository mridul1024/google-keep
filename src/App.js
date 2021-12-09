import React, { useState } from 'react'
import Header from "@components/Header/index.js";
import Note from "@components/Note/index.js";
import GlobalStyles from "./GlobalStyles";
import NoteList from "@components/NoteList/index.js";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Note />
            <NoteList></NoteList>
            <p>Setup</p>
        </>
    )
}
