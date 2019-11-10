import React from 'react';
import GameCardWrapper from './gamecard.style';
import classNames from 'classnames';
import {team_images} from '../../../helper/team_images'
import { makeStyles } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    "card-body": {
        height:"190px",
        width: "280px",
        alignItems: "center"
    },
    "media_1": {
        height:"80px",
        width: "75px",
        margin: "30px 20px",
    },
    "media_2": {
        height:"80px",
        width: "75px",
    },
    "score": {
        marginLeft: "17px",
        fontSize: "30px",
    },
    "stadium": {
        textAlign: "center",
        fontSize: "20px",
    },
  }))

const WinningProbability = (
    {team, p1, pe, p2}
    ) => {
    const classes = useStyles();

    return (
        <div style={{textAlign: "center"}}>
            <Grid
             container
             direction="row"
             justify="center"
             alignItems="center"
            >
                <Grid
                 item
                >
                <img
                className={classes.media_1}
                src={team_images[team]}
                />

                </Grid>


                <Grid
                 item
                >
                    Vitória: {p1} %<br/>
                    Empate: {pe} %<br/>
                    Derrota: {p2} %<br/>
                </Grid>

            
              

            </Grid>

        </div>
    )
}

export default WinningProbability