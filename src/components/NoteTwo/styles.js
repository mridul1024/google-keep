import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    width: "250px",
    height: "200px",
    padding: "5px 5px",
    margin: "10px 10px",
    background: "#fff59d",
    position: "relative",
  },
  content: {
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
  },
  textField: {
    marginTop: "10px",
    fontSize: "16px",
  },
  buttonContainer: {
    // justifyContent: "end",
    // alignItems: "end",
    position: "absolute",
    right: "5px",
    bottom: "5px",
  },
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  chipsContainer: {
    display: "flex",
  },
  chip: {
    marginTop: "20px",
    marginRight: "3px",
    background: "white",
  },
});
