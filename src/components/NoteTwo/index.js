import React, { useEffect, useState } from "react";
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
  const [chipValues, setChipValues] = useState(chips);
  const [changeTrigger, setChangeTrigger] = useState(false);
  const [chipChangeTrigger, setChipChangeTrigger] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setChipValues(chips);
  }, [chips]);

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

    if (!edit && (changeTrigger || chipChangeTrigger)) {
      console.log(`while editing - ${chipValues}`);
      dispatch(
        editNoteState({
          id: index,
          title: values.title,
          content: values.content,
          chips: chipValues,
        })
      );
      setChangeTrigger(false);
      setChipChangeTrigger(false);
    }
    edit ? setEdit(false) : setEdit(true);
  };

  const deleteNotes = () => {
    dispatch(deleteNoteState(index));
  };

  const deleteChip = (item, index) => {
    setChipChangeTrigger(true);
    console.log(`delete chip with item - ${item} and index - ${index}`);
    setChipValues([...chipValues.filter((chip) => chip !== item)]);
    console.log(chipValues);
  };

  const printValues = () => {
    console.log(chipValues);
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
                disabled={edit}
              />
            )}

            <div className={classes.chipContainer}>
              {chipValues?.map((item, index) =>
                edit ? (
                  <Chip key={index} className={classes.chip} label={item} />
                ) : (
                  <Chip
                    key={index}
                    className={classes.chip}
                    label={item}
                    onDelete={() => deleteChip(item, index)}
                  />
                )
              )}
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
