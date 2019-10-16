import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ActionWidget from './../components/widgets/actionwidget/ActionWidget'
import GameCard from './../components/widgets/gamecard/GameCard'
import BrazilianLeagueGraph from './../components/graphics/brazilianleaguegraph/BrazilianLeagueGraph'
import PlayerStatsGraph from './../components/graphics/playerstats/PlayerStatsGraph'
import PlayerCard from './../components/widgets/playercard/PlayerCard'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { blue } from '@material-ui/core/colors'


const Intro = () => {
    const [games, setGames ] = useState([])
    const [topPlayers, setTopPlayers ] = useState([])

    const responsive = {
        0: { items: 1 },
        500: { items: 2 },
        900: { items: 4 },
        1024: { items: 5 },
      }
    
    // ComponentDidMount()
    const fetchGames = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/brazilian_league/last_12_games`)
        .then(response => {
            setGames(response.data)
        })
        .catch(error => {
            console.error(error.message);
        })
    }
    useEffect( () => { fetchGames() }, [] )

    const fetchTopPlayes = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/players/top`)
        .then(response => {
            setTopPlayers(response.data)
        })
        .catch(error => {
            console.error(error.message);
        })
    }   
    console.log(topPlayers)
    useEffect( () => { fetchTopPlayes() }, [] )
        return (
            <>          
                <div style={{textAlign: "center"}}>
                    <h3>Últimos Jogos</h3>
                </div>
               <br/>
               <AliceCarousel
                mouseDragEnabled
                buttonsDisabled
                autoPlay={true}
                autoPlayInterval={5000}
                infinite={false}
                responsive={responsive}
                dotsDisabled 
                >
                {games.map((game, key) => (
                   <GameCard
                   key={key}
                   date={game['date']}
                   stadium={game['stadium']}
                   team_1={game['team_1']}
                   team_2={game['team_2']}
                   score_team_1={game['score_team_1']}
                   score_team_2={game['score_team_2']}
                   />

                ))}
                </AliceCarousel>

                <br/>
                <BrazilianLeagueGraph/>
                <br/>
                <br/>


                <div style={{textAlign: "center"}}>
                    <h3>Jogadores Mais Caros</h3>
                </div>
               <br/>
               <AliceCarousel
                mouseDragEnabled
                buttonsDisabled
                autoPlay={true}
                autoPlayInterval={5000}
                infinite={false}
                responsive={responsive}
                dotsDisabled 
                >
                {topPlayers.map((player, key) => (
                   <PlayerCard
                   key
                   name={player['name']}
                   position={player['position']}
                   nationality={player['nationality']}
                   age={player['age']}
                   team={player['team']}
                   market_value={player['market_value']}
                   stats={player['stats']}
                   />

                ))}
                </AliceCarousel>

                {/* Fazer o padding */}
                <br/><br/><br/><br/><br/>
            </>
        )
    }


export default Intro