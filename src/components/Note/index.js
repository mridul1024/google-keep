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

  const open = Boolean(note.anchor);
  const id = open ? "simple-popover" : undefined;

  const addNewNote = () => {
    let title = document.getElementById("noteTitle").value;
    let content = document.getElementById("noteContent").value;
    console.log(`${title}, ${content} has been added`);

    let data = { noteTitle: title, noteContent: content };
    addNote({
      ...note,
      noteData: {
        noteTitle: title,
        noteContent: content,
      },
    });

    console.log(note.noteData);
    dispatch(addNotes(note.noteData));
  };

  const addContentField = () => {
    if (!contentFieldVisibility && !document.getElementById("noteContent")) {
      contentFieldVisibility = true;
      var input = document.createElement("input");
      input.id = "noteContent";
      input.className = classes.textField;
      input.placeholder = "Write more details about your note here.";
      document.getElementById("form-element").appendChild(input);
    }
  };

  useEffect(() => {});

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
            <input
              id="noteTitle"
              type="text"
              className={classes.textField}
              placeholder="Write a note."
              onClick={addContentField}
            />
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
            {/* <Typography sx={{ p: 2 }}> */}
            <input
              id="chipsInput"
              type="text"
              placeholder="Enter tag"
              className={classes.textField}
            />

            <Button size="small" onClick="">
              <CheckOutlined />
            </Button>

            {/* </Typography> */}
          </Popover>

          <Button size="large" onClick={addNewNote}>
            <PlusCircleOutlined style={{ color: "green" }} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
