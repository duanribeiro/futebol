import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationWidgetWrapper from './notification.style';

export const NotificationWidget = ({ notificationData, heading = "Notifications" }) => {
    return (
        <NotificationWidgetWrapper>
            <div className="notification-card">

                <div className="notifiaction-header">
                    {heading}
                </div>

                <div className="noification-list">

                    <Scrollbars
                        style={{ height: '300px' }}
                        autoHide
                    >
                        {
                            notificationData &&
                            notificationData.map((e, i) => {
                                return (
                                    <div className="container list-container" key={i}>
                                        <div className="row ptb-20">
                                            <div className="col-2">
                                                <span className="notifiaction-icon"><i className={e.iconClass}></i></span>
                                            </div>
                                            <div className="col-7 fs-14 demi-bold-text">
                                                {e.notification}
                                            </div>
                                            <div className="col-3 fs-12 demi-bold-text">
                                                {e.time}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </Scrollbars>

                    <div className="container list-container">
                        <div className="ptb-20 text-center show-more">
                            Show More
                        </div>
                    </div>

                </div>
            </div>
        </NotificationWidgetWrapper>
    )
}