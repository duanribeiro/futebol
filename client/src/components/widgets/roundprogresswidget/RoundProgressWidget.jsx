import React from 'react';
import classNames from 'classnames';
import { Progress } from 'react-sweet-progress';
import RoundProgressWrapper from './roundProgess.style';

export const RoundProgressWidget = ({ headline, subheader, progress, progressColor, className, dark = false, info, background = "#ffffff" }) => {
    return (
        <RoundProgressWrapper dark={dark} background={background}>
            <div className={classNames('round-widget-card', 'text-center', className)}>
                <div className="round-widget-header">
                    {headline}
                </div>
                <div className="plr-16 pb-16">
                    <div className="ptb-5">
                        <Progress
                            type="circle"
                            percent={progress}
                            theme={{
                                active: {
                                    color: `${progressColor}`,
                                    trailColor: '#EFEFEF',
                                }
                            }}
                        />
                    </div>
                    <div className="headline fs-20 demi-bold-text">
                        {subheader}
                    </div>
                    <div className="round-widget-card-info">
                        {info}
                    </div>
                </div>
            </div>
        </RoundProgressWrapper>
    );
}

export default RoundProgressWidget;