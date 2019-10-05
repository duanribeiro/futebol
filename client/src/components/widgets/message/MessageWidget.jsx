import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import MessageWidgetWrapper from './message.style';

export  const MessageWidget = ({messageData, heading="Message"}) =>{
    return (
        <MessageWidgetWrapper>
           <div className="message-card">
                <div className="message-header">
                    {heading}
                </div>

                <div className="message-list">
                    <Scrollbars
                        style={{ height: '300px' }}
                        autoHide
                    >
                    {
                        messageData &&
                        messageData.map((e,i) => {
                            return (
                                <div className="container list-container" key={i}>
                                    <div className="row ptb-10">
                                        <div className="col-2"> 
                                            <img className="profie-image" src={e.profile} alt="#"></img>                         
                                        </div>
                                        <div className="col-10"> 
                                            <div>
                                                {e.heading}
                                            </div>
                                            <div className="message">
                                                {e.message}
                                            </div>
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
        </MessageWidgetWrapper>
    )
}