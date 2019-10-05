import React from 'react';
import classNames from 'classnames';
import SocialWidgetWrapper from './social.style';

const SocialWidget = (
    {iconName, iconColor, headline='', subheader='',className ,dark=true}
    ) =>{
    return (
        <SocialWidgetWrapper
            iconColor={iconColor}
            dark={dark}
        >
            <div className={classNames('social-widget-card', className)}>
                <div className="row ma-0">
                    <div className="col-6 ptb-12 text-center">
                        <i className={iconName}></i>    
                    </div>
                    <div className="col-6 ptb-12 rightBackground text-center">
                        <div className="headline">
                            {headline}
                        </div>
                        <div className="subheader">
                            {subheader}
                        </div>
                    </div>
                </div>
            </div>
        </SocialWidgetWrapper>
    )
}

export default SocialWidget
