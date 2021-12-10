import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Popover,
  Input,
} from "@material-ui/core";
import {
  PlusCircleOutlined,
  TagOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addNotes } from "../../redux/actions/NoteAction";

export default function Note() {
  const dispatch = useDispatch();
  const classes = useStyles();
  let contentFieldVisibility = false;
  const [values, setValues] = useState({ title: "", content: "" });
  const [isOpen, setIsOpen] = useState(false);

  const [note, addNote] = useState({
    noteData: {
      noteTitle: "",
      noteContent: "",
      noteChips: [],
    },
    anchor: null,
  });

  const handleClick = (event) => {
    addNote({
      ...note,
      anchor: event.currentTarget,
    });

    let element = document.getElementById("chipsInput");
    console.log(element);
  };

  const handleClose = (event) => {
    addNote({
      ...note,
      anchor: null,
    });
  };

  const addChips = () => {
    let chip = document.getElementById("chipsInput");
    if (chip != null || chip != "undefined") {
      addNote({
        ...note,
        chips: chips.push(chip.value),
      });
      note.chips.map((item) => {
        console.log(item);
      });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
    console.log(values);
  };

  const open = Boolean(note.anchor);
  const id = open ? "simple-popover" : undefined;

  const addNewNote = () => {
    addNote({
      ...note,
      noteData: {
        noteTitle: values.title,
        noteContent: values.content,
      },
    });

    console.log(note.noteData);
    dispatch(
      addNotes({
        note: {
          title: values.title,
          content: values.content,
        },
      })
    );
  };

  return (
    <>
      <Card className={classes.container}>
        <CardContent className="">
          <form
            className={classes.content}
            id="form-element"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="noteTitle"
              type="text"
              name="title"
              className={classes.textField}
              placeholder="Title"
              value={values.title}
              onChange={handleChange}
              onClick={() => {
                setIsOpen(true);
              }}
            />
            {isOpen && (
              <TextField
                id="noteTitle"
                type="text"
                name="content"
                className={classes.textField}
                onChange={handleChange}
                placeholder="Write your note here."
                value={values.content}
              />
            )}
          </form>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
          <Button size="large" onClick={handleClick}>
            <TagOutlined />
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={note.anchor}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <TextField
              id="chipsInput"
              type="text"
              placeholder="Enter tag"
              className={classes.textField}
            />

            <Button size="small" onClick="">
              <CheckOutlined />
            </Button>
          </Popover>

          <Button size="large" onClick={addNewNote}>
            <PlusCircleOutlined style={{ color: "green" }} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
