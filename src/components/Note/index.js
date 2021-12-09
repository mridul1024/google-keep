import React, { useState, useEffect } from 'react'
import { useStyles } from "./styles";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    TextField,
    Popover
} from "@material-ui/core";

export default function Note() {
    const classes = useStyles();

    const [note, addNote] = useState([]);

    const addNewNote = () => {
        let noteTitle = document.getElementById("noteTitle").value;
        let noteContent = document.getElementById("noteContent").value;
        console.log(`${noteTitle}, ${noteContent} has been added`);

        addNote([
            ...note,
            {
                noteTitle: document.getElementById("noteTitle").value,
                noteContent: document.getElementById("noteContent").value

            }
        ]);
    }

    useEffect(() => {
        note.map(item => {
            console.log(`${item.noteTitle} and ${item.noteContent}`);

        })
    }, [note]);

    return (
        <>
            <Card className={classes.container}>
                <CardContent className="">
                    <form className={classes.content} noValidate autoComplete="off">
                        <TextField id="noteTitle" label="Note Title" variant="outlined" className={classes.textField} />
                        <TextField id="noteContent" label="Note Content" variant="filled" className={classes.textField} />
                    </form>
                </CardContent>
                <CardActions className={classes.buttonContainer}>
                    <Button size="small">Tags</Button>
                    <Button size="small" onClick={addNewNote}>Add Note</Button>
                </CardActions>
            </Card>
        </>
    )
}
