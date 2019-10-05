import React from 'react';
import classNames from 'classnames';
import ActionWidgetWrapper from './actionwidget.style';

export  const ActionWidget = (
    {cardMedia,cardTitle = '', mediaHeadline = '', cardDiscription = '', className = ''}
    ) =>{
    return (
        <ActionWidgetWrapper>
            <div className={classNames('action-widget-card', 'card', className)}>
               <span className="media-headline">{mediaHeadline}</span>
                <div className="card-body">
                    <h6 className="card-title action-card-title">{ cardTitle }</h6>
                    <p className="card-text action-card-discription">{ cardDiscription }</p>
                <div className="pt-15">
                    <button className="price-button">$550</button>
                    <i className="fas fa-share-alt share-icon float-right"></i>
                    <i className="far fa-heart like-icon float-right mr-20"></i>
                </div>
                </div>
            </div>
        </ActionWidgetWrapper>
    )
}

export default ActionWidget