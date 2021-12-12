import React, { useState } from "react";
import NoteTwo from "../NoteTwo/index";
import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { searchNoteTag } from "../../redux/actions/NoteAction";

export default function NoteList() {
  const note = useSelector((state) => state.note);
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const storeSearchTag = (e) => {
    setSearch(e.currentTarget.value);
  };

  const searchTag = () => {
    dispatch(searchNoteTag(search));
  };

  return (
    <>
      <div className={classes.searchContainer}>
        <TextField
          id="filled-search"
          label="Search using tags"
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
        {Object.keys(note.search).length === 0
          ? note.notes.map((item, index) => (
              <NoteTwo
                key={index}
                index={item.note.id}
                title={item.note.title.toString()}
                content={item.note.content.toString()}
                chips={item.note.chips}
              />
            ))
          : note.search.map((item, index) => (
              <NoteTwo
                key={index}
                index={item.note.id}
                title={item.note.title.toString()}
                content={item.note.content.toString()}
                chips={item.note.chips}
              />
            ))}
      </div>
    </>
  );
}
