import React from "react";
import PageviewsChartWrapper from "./pageviewsChart.style";
import { Line } from "react-chartjs-2";

const PageviewsChartWidget = () => {
    const dataset1 = {
        label: "Visitors",
        fill: false,
        data: [410, 380, 800, 789, 450, 550, 187, 470, 234, 984, 1024, 890],
        borderColor: "#00C486",
        pointBorderColor: "#00C486",
        pointBackgroundColor: "#00C486",
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: "rgba(0, 196, 134, 0.5)",
        pointRadius: 4,
        pointBevelWidth: 3,
        pointBevelHighlightColor: "rgba(255, 255, 255, 0.75)",
        pointBevelShadowColor: "rgba(0, 196, 134, 0.5)",
        pointHoverRadius: 6,
        pointHoverBevelWidth: 4.5,
        pointHoverInnerGlowWidth: 20,
        pointHoverInnerGlowColor: `rgba(0, 196, 134, 0.5)`,
        pointHoverOuterGlowWidth: 20,
        pointHoverOuterGlowColor: `rgba(0, 196, 134, 0.5)`
    };

    const dataset2 = {
        label: "Page Views",
        fill: false,
        data: [
            1230,
            1140,
            2400,
            2367,
            1350,
            1650,
            561,
            1410,
            702,
            2952,
            3072,
            2670
        ],
        borderColor: "#677484",
        pointBorderColor: "#677484",
        pointBackgroundColor: "#677484",
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: "rgba(103, 116, 132, 0.5)",
        pointRadius: 4,
        pointBevelWidth: 3,
        pointBevelHighlightColor: "rgba(255, 255, 255, 0.75)",
        pointBevelShadowColor: "rgba(103, 116, 132, 0.5)",
        pointHoverRadius: 6,
        pointHoverBevelWidth: 4.5,
        pointHoverInnerGlowWidth: 20,
        pointHoverInnerGlowColor: `rgba(103, 116, 132, 0.5)`,
        pointHoverOuterGlowWidth: 20,
        pointHoverOuterGlowColor: `rgba(103, 116, 132, 0.5)`
    };

    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        datasets: [dataset1, dataset2]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            mode: "index",
            intersect: false
        },
        hover: {
            mode: "nearest",
            intersect: true
        },
        spanGaps: true,
        scales: {
            xAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: "Month"
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: "Value"
                    }
                }
            ]
        }
    };

    return (
        <PageviewsChartWrapper>
            <div className="page-view-chart-widget-card">
                <div className="header fs-20 demi-bold-text">Visitors & Page views</div>
                <div className="analytics">
                    <Line data={data} height={240} options={options} />
                </div>
            </div>
        </PageviewsChartWrapper>
    );
};

export default PageviewsChartWidget;
