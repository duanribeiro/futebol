import React from "react";
import AnalyticsProcessWrapper from "./analyticsProcessWidgets.style";
import { Progress } from "react-sweet-progress";

const AnalyticsProcessWidgets = ({ sidebarTheme }) => {
    return (
        <AnalyticsProcessWrapper style={{ height: "100%" }}>
            <div className="analytics-processwidget-card">
                <div className="header fs-20 demi-bold-text">Current Balance</div>
                <div className="text-center">
                    <Progress
                        type="circle"
                        percent={50}
                        width={180}
                        strokeWidth={8}
                        theme={{
                            active: {
                                color: `${sidebarTheme.activeRouteBackColor}`,
                                trailColor: "#EFEFEF"
                            }
                        }}
                        className="custom-progress-widget"
                        symbolClassName="analytics"
                    />
                </div>
                <div className="text-center desc1">$ 40,88,950.00</div>
                <div className="text-center desc2 mb-10">
                    This billing cycle
                </div>
            </div>
        </AnalyticsProcessWrapper>
    );
};

export default AnalyticsProcessWidgets;
