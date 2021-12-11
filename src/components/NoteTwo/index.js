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
  Typography,
  Chip,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { editNoteState, deleteNoteState } from "../../redux/actions/NoteAction";

export default function NoteTwo({ index, title, content, chips }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(true);
  const [values, setValues] = useState({ title: title, content: content });
  const [changeTrigger, setChangeTrigger] = useState(false);
  const dispatch = useDispatch();

  //add handlechange
  const handleChange = (e) => {
    setChangeTrigger(true);
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const editNotes = () => {
    if (edit === true) {
      console.log("disabled tha ab enabled");
    }

    if (!edit && changeTrigger) {
      dispatch(
        editNoteState({
          id: index,
          title: values.title,
          content: values.content,
          chips: chips,
        })
      );
      setChangeTrigger(false);
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
            {edit ? (
              <Typography className={classes.textField}>{title}</Typography>
            ) : (
              <TextField
                type="text"
                name="title"
                className={classes.textField}
                onChange={handleChange}
                defaultValue={title}
                // InputProps={{ disableUnderline: true }}
                disabled={edit}
              />
            )}

            {edit ? (
              <Typography className={classes.textField}>{content}</Typography>
            ) : (
              <TextField
                type="text"
                name="content"
                className={classes.textField}
                onChange={handleChange}
                defaultValue={content}
                // InputProps={{ disableUnderline: true }}
                disabled={edit}
              />
            )}

            {/* Write after this */}
            <div className={classes.chipContainer}>
              {chips?.map((item, index) => (
                <Chip key={index} className={classes.chip} label={item} />
              ))}
            </div>
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
