import React, { useState } from "react";
import { useStyles } from "./styles";
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  ListItem,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { editNoteState, deleteNoteState } from "../../redux/actions/NoteAction";

export default function NoteTwo({ index, title, content }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(true);
  const [values, setValues] = useState({ title: title, content: content });
  const dispatch = useDispatch();

  //add handlechange
  const handleChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const editNotes = () => {
    if (edit === true) {
      console.log("disabled tha ab enabled");
    }

    if (edit === false) {
      console.log(
        `id: ${index}, title: ${values.title}, content: ${values.content}`
      );

      dispatch(
        editNoteState({
          id: index,
          title: values.title,
          content: values.content,
        })
      );
    }
    edit ? setEdit(false) : setEdit(true);
  };

  const deleteNotes = () => {
    dispatch(deleteNoteState(index));
  };

  return (
    <>
      <Card key={index} className={classes.container}>
        <CardContent className="">
          <form
            className={classes.content}
            id="form-element"
            noValidate
            autoComplete="off"
          >
            <TextField
              type="text"
              name="title"
              className={classes.textField}
              onChange={handleChange}
              placeholder={title}
              disabled={edit}
            />
            <TextField
              type="text"
              name="content"
              className={classes.textField}
              placeholder={content}
              onChange={handleChange}
              disabled={edit}
            />
          </form>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
          <Button size="large" onClick={deleteNotes}>
            <DeleteOutlined style={{ color: "red" }} />
          </Button>
          <Button size="large" onClick={editNotes} id={index}>
            {edit ? <EditOutlined /> : <CheckOutlined />}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
