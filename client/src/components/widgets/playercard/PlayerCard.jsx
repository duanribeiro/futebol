import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import PlayerStatsGraph from './../../graphics/playerstats/PlayerStatsGraph'
import { team_images } from './../../../helper/team_images'
import Ratings from 'react-ratings-declarative'


const useStyles = makeStyles(() => ({
  card: {
      width: "100%",
      height: 550,
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
    { name='', position='', nationality='', age='', team='', market_value='', stats = '' }
    ) => {

    const classes = useStyles();
    let player_stars = (((stats["Chute"] + stats["Drible"] + stats["Marcação"] + stats["Passe"] +
     stats["Velocidade"] + stats["Visão de Jogo"]) / 6 ) / 2)

    return (
        <Card
        className={classes.card}
        >
          <CardActionArea>
            <CardMedia
            className={classes.media}
            image={team_images[team]}
            />
            <CardContent>
              <Typography
              gutterBottom
              variant="h5"
              component="h2"
              >
                {name}<br/>
                R$ {market_value} milhões

              </Typography>

              <Typography
              variant="body2"
              color="textSecondary"
              component="p">
                {position}<br/>
                {nationality}<br/>
                {age} anos<br/>
                {team}<br/>
              </Typography>

              <div style={{marginLeft: "10px"}}>
                {/* Gráfico das estatísticas do jogador */}
                <PlayerStatsGraph
                stats={stats}
                />  
              </div>

              <div style={{textAlign: "center"}}>
                <Ratings
                  rating={player_stars}
                  widgetSpacings="5px"
                >
                  <Ratings.Widget widgetRatedColor="yellow" widgetDimension="35px"/>
                  <Ratings.Widget widgetRatedColor="yellow" widgetDimension="35px"/>
                  <Ratings.Widget widgetRatedColor="yellow" widgetDimension="35px"/>
                  <Ratings.Widget widgetRatedColor="yellow" widgetDimension="35px"/>
                  <Ratings.Widget widgetRatedColor="yellow" widgetDimension="35px"/>
                </Ratings>
              </div>

              
            </CardContent>
          </CardActionArea>
        <CardActions/>
      </Card>
    )
}

export default PlayerCard       