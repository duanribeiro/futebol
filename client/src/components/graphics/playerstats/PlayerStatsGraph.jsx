import React, {useEffect, useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';
import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

const PlayerStatsGraph = props => {
    const options = {
        navigation: {
            buttonOptions: {
              enabled: false
            }
        },
        credits: {
            enabled: false
        },
        chart: {
            polar: true,
            type: 'line',
        },
        title: {
            text: ''
        },
    
        pane: {
            size: '100px'
        },
    
        xAxis: {
            categories: ['Velocidade', 'Drible', 'Passe', 'Visão de Jogo',
                'Marcação', 'Chute'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
        },
    
    
        series: [{
            name: '',
            data: [props.stats['Velocidade'], props.stats['Drible'], props.stats['Passe'],
            props.stats['Visão de Jogo'], props.stats['Marcação'], props.stats['Chute']],
            pointPlacement: 'on',
            showInLegend: false
        }],
        }

    return (
        <HighchartsReact
        highcharts={Highcharts}
        constructorType={"chart"}
        containerProps={{ style: { height: "200px" , width: "230px"} }}
        options={options}
        />
    )
}
export default PlayerStatsGraph



