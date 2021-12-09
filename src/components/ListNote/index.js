import React from 'react'

export default function index({ NoteTitle, NoteContent }) {
    return (
        <>
            <p>{NoteTitle}</p>
            <p>{NoteContent}</p>
        </>
    )
}
