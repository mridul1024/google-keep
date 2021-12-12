import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { FormOutlined } from "@ant-design/icons";

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.header}>
            <FormOutlined /> GOOGLE KEEP
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
