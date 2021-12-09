import React from 'react'
import Note from "../Note/index";
import { Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles"

export default function NoteList() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.container}>
                <CardContent className="">
                    <form className={classes.content} noValidate autoComplete="off">
                        <TextField id="noteTitle" label="Note Title" variant="outlined" className={classes.textField} disabled />
                        <TextField id="noteContent" label="Note Content" variant="filled" className={classes.textField} disabled />
                    </form>
                </CardContent>
                <CardActions className={classes.buttonContainer}>
                    <Button size="small">remove</Button>
                    <Button size="small" onClick="">edit</Button>
                </CardActions>
            </Card>
        </>
    )
}
