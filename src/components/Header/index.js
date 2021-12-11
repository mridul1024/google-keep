import React from 'react'
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from './styles';


export default function Header() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.header}>
                        Google Keep Clone
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
