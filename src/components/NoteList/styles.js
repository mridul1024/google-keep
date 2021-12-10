import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    width: "250px",
    height: "auto",
    padding: "5px 5px",
    margin: "10px 10px",
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
