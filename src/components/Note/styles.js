import { Grid, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        width: '500px',
        height: 'auto',
        padding: '5px 5px',
        margin: '10px 10px'
    },
    content: {
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
    },
    textField: {
        outline: 'none',
        background: 'none'
    },
    buttonContainer: {
        justifyContent: 'end',
        alignItems: 'end'
    }
})