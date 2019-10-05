import React from 'react';
import classNames from 'classnames';
import { Progress } from 'react-sweet-progress';
import LinearProgressWrapper from './progess.style';
import "react-sweet-progress/lib/style.css";

export const LinearProgressWidget = ({ headline, subheader, progress, progressColor, dark = false, info, className, background = "#ffffff" }) => {
    return (
        <LinearProgressWrapper dark={dark} background={background}>
            <div className={classNames('linear-widget-card', className)}>
                <div className="linear-widget-header">
                    {headline}
                </div>
                <div className="plr-16 pb-16">
                    <div className="headline fs-20 demi-bold-text">
                        {subheader}
                    </div>
                    <div className="ptb-5">
                        <Progress
                            percent={progress}
                            theme={{
                                active: {
                                    color: `${progressColor}`
                                }
                            }}
                        />
                    </div>
                    <div className="linear-widget-card-info">
                        {info}
                    </div>
                </div>
            </div>
        </LinearProgressWrapper>
    );
}

export default LinearProgressWidget;