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
  Chip,
} from "@material-ui/core";
import {
  PlusCircleOutlined,
  TagOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addNotes } from "../../redux/actions/NoteAction";
import { v4 as uuidv4 } from "uuid";

export default function Note() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState({ title: "", content: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [tagValue, setTagValue] = useState({ tag: "" });
  const [tags, setTags] = useState([]);
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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const open = Boolean(note.anchor);
  const id = open ? "simple-popover" : undefined;

  const addNewNote = () => {
    dispatch(
      addNotes({
        note: {
          id: uuidv4(),
          title: values.title,
          content: values.content,
          chips: tags,
        },
      })
    );
  };

  const storeTag = (e) => {
    setTagValue({ tag: e.currentTarget.value });
  };

  const addTag = () => {
    setTags([...tags, tagValue.tag.toString()]);
  };

  const deleteTag = (item, index) => {
    setTags([...tags.filter((item, id) => index !== id)]);
  };

  return (
    <>
      <div className={classes.moveToCenter}>
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
                InputProps={{ disableUnderline: true }}
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
                  placeholder="Write your note here"
                  InputProps={{ disableUnderline: true }}
                  value={values.content}
                />
              )}
              {Object.keys(tags).length > 0 ? (
                <div className={classes.chipContainer}>
                  {tags.map((item, index) => (
                    <Chip
                      key={index}
                      className={classes.tags}
                      label={item}
                      onDelete={() => deleteTag(item, index)}
                    />
                  ))}
                </div>
              ) : (
                <Typography className={classes.tagPlaceholder}>
                  Your tags will show up here
                </Typography>
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
                InputProps={{ disableUnderline: true }}
                onChange={storeTag}
              />

              <Button
                size="large"
                onClick={addTag}
                className={classes.buttonContainer}
              >
                <CheckCircleOutlined />
              </Button>
            </Popover>

            <Button size="large" onClick={addNewNote}>
              <PlusCircleOutlined style={{ color: "green" }} />
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
