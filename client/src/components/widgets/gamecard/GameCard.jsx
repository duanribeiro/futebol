import React from 'react';
import GameCardWrapper from './gamecard.style';
import classNames from 'classnames';
import {team_images} from './../../../helper/team_images'
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

const GameCard = (
    {stadium = '', team_1, team_2, score_team_1, score_team_2, date, className = ''}
    ) => {
    const classes = useStyles();

    return (
        <GameCardWrapper>
            <div className={classNames('action-widget-card', 'card', className)}>

                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Grid
                    item
                    xs={4}
                    >
                        <img 
                        className={classes.media_1}
                        src={team_images[team_1]}
                        />
                    </Grid>
                    <Grid
                    item
                    xs={4}
                    >
                        <div
                        className={classes.score}
                        >
                            { score_team_1 } x { score_team_2 }
                        </div>
                    </Grid>
                    <Grid
                    item
                    xs={4}
                    >
                        <img 
                        className={classes.media_2}
                        src={team_images[team_2]}
                        />
                    </Grid>
                </Grid>

                <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                >
                    <Grid
                    item
                    xs={12}
                    >
                        <div
                        className={classes.stadium}
                        >
                        { stadium }
                        </div>
                    </Grid>
                    <Grid
                    item
                    xs={12}
                    >
                        <div
                        className={classes.stadium}
                        >
                        { date }
                        </div>
                    </Grid>

                </Grid>
            </div>
        </GameCardWrapper>
    )
}

export default GameCard