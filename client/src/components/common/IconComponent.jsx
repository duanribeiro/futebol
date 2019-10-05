import React from 'react';
import classNames from 'classnames';

export  const IconComponent = ({iconClass, text}) =>{
    return (
        <div className="icon-component text-center">
            <div className="pt-16">
                <i className={classNames('icon', iconClass)}></i>
            </div>
            {
                text.length <= 10 ?
                <div className="pa-16 text">
                    {text}
                </div> :
                <div className="pa-16 text">
                    {`${text.substring(0, 10)}...`}
                </div>
            }
        </div>
    )
}