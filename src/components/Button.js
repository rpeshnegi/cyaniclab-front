import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.background,
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 48,
        padding: '0 30px',
    },
}));


const CyanicButton = ({ props, text, dispatch }) => {
    const classes = useStyles();
    return <Button variant="contained" className={classes.root} color="primary" >
        {text}
    </Button>;
}

export default CyanicButton