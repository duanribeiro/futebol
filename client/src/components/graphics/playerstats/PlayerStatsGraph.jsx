import React, {useEffect, useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';
import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

const PlayerStatsGraph = () => {
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
            categories: ['Ataque', 'Drible', 'Passe', 'Controle de Bola',
                'Físico', 'Velocidade'],
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
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },
    
    
        series: [{
            name: '',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on',
            showInLegend: false
        }],
        }

    return (
        <HighchartsReact
        highcharts={Highcharts}
        constructorType={"chart"}
        containerProps={{ style: { height: "200px" , width: "200px"} }}
        options={options}
        />
    )
}
export default PlayerStatsGraph



