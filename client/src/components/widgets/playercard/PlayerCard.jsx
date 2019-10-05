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


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
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
    {name='', position='', nationality='', age='', team='', market_value=''}
    ) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/07/Not%C3%ADcias-do-Palmeiras.jpg"
          title="Contemplative Reptile"
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
            <PlayerStatsGraph/>

        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* Gráfico das estatísticas do jogador */}
      </CardActions>
    </Card>
    )
}

export default PlayerCard       