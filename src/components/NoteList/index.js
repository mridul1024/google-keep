import React, { useState } from "react";
import Note from "../Note/index";
import NoteTwo from "../NoteTwo/index";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  ListItem,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

export default function NoteList() {
  const allNotes = useSelector((state) => state.note.notes);
  const classes = useStyles();
  const [edit, setEdit] = useState(true);
  const [values, setValues] = useState({ title: "", content: "" });
  const dispatch = useDispatch();

  const editNotes = (e) => {
    console.log(e.currentTarget.id);
    if (edit) {
      //dispatch edit action with new payload
    }
    edit ? setEdit(false) : setEdit(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const deleteNotes = () => {
    console.log(`delete =`);
  };

  return (
    <>
      <div className={classes.listContainer}>
        {allNotes.map((item, index) => (
          <NoteTwo
            key={index}
            index={index}
            handleChange={handleChange}
            deleteNotes={deleteNotes}
            title={item.note.title.toString()}
            content={item.note.content.toString()}
          />

          // <Card key={index} className={classes.container}>
          //   <CardContent className="">
          //     <form
          //       className={classes.content}
          //       id="form-element"
          //       noValidate
          //       autoComplete="off"
          //     >
          //       <TextField
          //         type="text"
          //         name="title"
          //         className={classes.textField}
          //         onChange={handleChange}
          //         placeholder={JSON.stringify(item.note.title.toString())}
          //         disabled={edit}
          //       />
          //       <TextField
          //         type="text"
          //         name="content"
          //         className={classes.textField}
          //         placeholder={JSON.stringify(item.note.content.toString())}
          //         onChange={handleChange}
          //         disabled={edit}
          //       />
          //     </form>
          //   </CardContent>
          //   <CardActions className={classes.buttonContainer}>
          //     <Button size="large" onClick={deleteNotes}>
          //       <DeleteOutlined style={{ color: "red" }} />
          //     </Button>
          //     <Button size="large" onClick={editNotes} id={index}>
          //       {edit ? <EditOutlined /> : <CheckOutlined />}
          //     </Button>
          //   </CardActions>
          // </Card>
        ))}
      </div>
    </>
  );
}
