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
import { CheckOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { searchNoteTag } from "../../redux/actions/NoteAction";
// import { v4 as uuidv4 } from "uuid";

export default function NoteList() {
  // const allNotes = useSelector((state) => state.note.notes);
  // const searchedNotes = useSelector((state) => state.note.search);
  const note = useSelector((state) => state.note);
  const classes = useStyles();
  const [edit, setEdit] = useState(true);
  const [values, setValues] = useState({ title: "", content: "" });
  const [search, setSearch] = useState("");
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

  const storeSearchTag = (e) => {
    setSearch(e.currentTarget.value);
    console.log(search);
  };

  const searchTag = () => {
    console.log(`search tag = ${search}`);
    //dispatch search action
    dispatch(searchNoteTag(search));
  };

  // const generateId = () => {
  //   return uuidv4();
  // };

  return (
    <>
      <div className={classes.searchContainer}>
        <TextField
          id="filled-search"
          label="Search using tags."
          type="search"
          variant="outlined"
          className={classes.search}
          onChange={storeSearchTag}
        />
        <Button
          size="large"
          variant="outlined"
          className={classes.searchButton}
          onClick={searchTag}
        >
          <SearchOutlined />
        </Button>
      </div>
      <div className={classes.listContainer}>
        {
          Object.keys(note.search).length === 0
            ? note.notes.map((item, index) => (
                <NoteTwo
                  key={index}
                  index={item.note.id}
                  handleChange={handleChange}
                  deleteNotes={deleteNotes}
                  title={item.note.title.toString()}
                  content={item.note.content.toString()}
                  chips={item.note.chips}
                />
              ))
            : note.search.map((item, index) => (
                <NoteTwo
                  key={index}
                  index={item.note.id}
                  handleChange={handleChange}
                  deleteNotes={deleteNotes}
                  title={item.note.title.toString()}
                  content={item.note.content.toString()}
                  chips={item.note.chips}
                />
              ))

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
        }
      </div>
    </>
  );
}
