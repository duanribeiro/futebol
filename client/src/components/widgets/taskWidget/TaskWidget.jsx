import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TaskWidgetWrapper from './task.style';

export const TaskWidget = ({ taskData, heading = "Task" }) => {
    return (
        <TaskWidgetWrapper>
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
                            taskData &&
                            taskData.map((e, i) => {
                                return (
                                    <div className="container list-container" key={i}>
                                        <div className="row ptb-10">
                                            <div className="col-2">
                                                <img className="profie-image" src={e.profile} alt="#"></img>                          </div>
                                            <div className="col-8">
                                                <div className="message fs-14 demi-bold-text">
                                                    {e.task}
                                                </div>
                                            </div>
                                            <div className="col-2 task-icons">
                                                <i className="far fa-edit mr-2"></i>
                                                <i className="fas fa-trash"></i>
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
        </TaskWidgetWrapper>
    )
}