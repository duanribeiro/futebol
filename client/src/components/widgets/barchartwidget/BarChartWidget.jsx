import React from "react";
import BarChartWidgetWrapper from "./barchart.style";
import { Bar } from "react-chartjs-2";
import classNames from "classnames";

const options = {
    maintainAspectRatio: false,
    scaleShowLabels: false,
    legend: false,
    scales: {
        xAxes: [
            {
                display: false,
                barPercentage: 0.3
            }
        ],
        yAxes: [
            {
                display: false
            }
        ]
    }
};

const BarChartWidget = props => {
    const {
        headline,
        subheader,
        dark = false,
        background = "#ffffff",
        barColor,
        className,
        labels = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        chartData = [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 90, 71]
    } = props;

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Data",
                backgroundColor: barColor,
                borderColor: barColor,
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: barColor,
                data: chartData
            }
        ]
    };

    return (
        <BarChartWidgetWrapper dark={dark} background={background}>
            <div
                className={classNames(
                    "bar-widget-card",
                    "text-center",
                    "pa-15",
                    className
                )}
            >
                <div>
                    <Bar data={data} height={80} options={options} />
                </div>
                <div className="headline pt-15">{headline}</div>
                <div className="bar-widget-card-info fs-14 regular-text">{subheader}</div>
            </div>
        </BarChartWidgetWrapper>
    );
};

export default BarChartWidget;
