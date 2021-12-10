import React from "react";
import Note from "../Note/index";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function NoteList() {
  const classes = useStyles();
  return (
    <>
      {/* <Card className={classes.container}>
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
            </Card> */}
      <Card className={classes.container}>
        <CardContent className="">
          <form
            className={classes.content}
            id="form-element"
            noValidate
            autoComplete="off"
          >
            <input
              type="text"
              className={classes.textField}
              placeholder="Write a note."
              disabled
            />
            <input
              type="text"
              className={classes.textField}
              placeholder="Description"
              disabled
            />
          </form>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
          <Button size="large" onClick="">
            <DeleteOutlined style={{ color: "red" }} />
          </Button>
          <Button size="large" onClick="">
            <EditOutlined />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
