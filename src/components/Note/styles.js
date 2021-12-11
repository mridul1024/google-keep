import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  moveToCenter: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "350px",
    height: "auto",
    padding: "5px 5px",
    margin: "10px 10px",
  },
  chipContainer: {
    display: "flex",
    marginTop: "10px",
  },
  tagPlaceholder: {
    marginTop: "20px",
    fontSize: "12px",
  },
  tags: {
    height: "2px",
    marginRight: "2px",
  },
  content: {
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
  },
  textField: {
    marginTop: "10px",
    border: "none",
    outline: "none",
    fontSize: "16px",
  },
  buttonContainer: {
    justifyContent: "end",
    alignItems: "end",
  },
});
