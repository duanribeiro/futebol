import React from 'react';
import PlayerCardWrapper from './playercard.style';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayerStatsGraph from './../../graphics/playerstats/PlayerStatsGraph'
import {team_images} from './../../../helper/team_images'

const useStyles = makeStyles(theme => ({
    card: {
        width: "100%",
        height: 500,
      },
    media: {
      height: 140,
    },
    card_header: {
      background: 'green'
    },
    player_stats: {
      marginTop: -50
    }
  }))


const PlayerCard = (
    {name='', position='', nationality='', age='', team='', market_value='', stats = ''}
    ) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={team_images[team]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {position}<br/>
            {nationality}<br/>
            {age} anos<br/>
            {team}<br/>
            R$ {market_value} milhões<br/>
          </Typography>
          <div style={{marginLeft: "10px"}}>
            <PlayerStatsGraph
            stats={stats}
            />  {/* Gráfico das estatísticas do jogador */}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    )
}

export default PlayerCard       