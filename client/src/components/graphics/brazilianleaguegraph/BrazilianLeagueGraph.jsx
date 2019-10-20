import React, {useEffect, useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';


const BrazilianLeagueGraph = () => {
    const [graphs, setGraphs ] = useState([])

    const fetchGraph = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/brazilian_league/brazilian_league_graph`)
        .then(response => {
            setGraphs(response.data)
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    // ComponentDidMount()
    useEffect( () => { fetchGraph() }, [] )
    
    const points = []
    const series = []


    graphs.map(graph =>{
        if (graph['points']) {
            points.push(graph["points"].slice(-1)[0])
        }
    })
    const topValues = points.sort((a, b) => b-a).slice(0, 4);

    graphs.map(graph => {
        if (graph['points']) {
            let last_value = graph['points'].slice(-1)[0] 

            if (topValues.includes(last_value) ) {
                series.push({
                    "name": graph['name'],
                    "data": graph['points'],
                    "visible": true
                })
            } else {
                series.push({
                    "name": graph['name'],
                    "data": graph['points'],
                    "visible": false
                })
            }
        }
    
    })

    let options = {
          title: {
            text: 'Evolução dos Times no Campeonato'
          },
          credits: {
            enabled: false
        },
          tooltip: {
            valueSuffix: ' Pontos'
        },
          legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
        },
          xAxis: {
            tickInterval: 1,
            title: {
                text: 'Rodadas do Campeonato'
            },
        },
        yAxis: {
            tickInterval: 3,
            title: {
                text: 'Pontos Acumulados'
            },
        },
          series: series.sort(function(first, second) {
            return second['data'].slice(-1)[0] - first['data'].slice(-1)[0]
           })
    };

    return (
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
        />
    )
}
export default BrazilianLeagueGraph



