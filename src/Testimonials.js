import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MotionSlider } from './components/MotionSlider';

const style = {
    root: {
        // backgroundColor: 'rgb(255 255 255 / 25%)',
        // backdropFilter: 'blur(1px)',
        '& h2': {
            textAlign: 'center'
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const useStyles = makeStyles(style);
const reviews = [
    {
        id: 0,
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos, et repudiandae quas hic inventore quisquam quis vitae, excepturi labore laudantium laboriosam veritatis optio illo minima voluptatum pariatur iure esse, voluptatibus ut explicabo est similique molestias.",
        name: "Elsa Porter"
    },
    {
        id: 1,
        text:
            "Fugit quibusdam veniam illum iure sunt quisquam necessitatibus sequi excepturi minima harum qui aliquid, modi voluptatibus expedita quasi illo! Numquam provident, vero saepe soluta officia beatae ducimus est ut dolorem atque aperiam non suscipit voluptatem?",
        name: "John Smith"
    },
    {
        id: 2,
        text:
            "Ut eius omnis rerum harum beatae ullam commodi quam quasi aperiam veniam quae esse corporis, fuga quis, animi asperiores similique nobis maiores molestias dolore ipsam. Omnis sunt iusto quasi.",
        name: "Scarlett Light"
    }
];


const Testimonials = ({ props, dispatch }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return <>
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom> Testimonials</Typography>
                <MotionSlider content={reviews} />
            </Grid>
        </Grid>
    </>;
}

export default Testimonials