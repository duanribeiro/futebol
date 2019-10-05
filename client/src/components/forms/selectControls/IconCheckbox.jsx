import React from 'react';

const IconCheckbox = () => {
    return (
        <div>
            <div className="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div className="state p-success">
                    <i className="icon fa fa-check"></i>
                    <label>fa-check</label>
                </div>
            </div>

            <div className="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div className="state p-danger-o">
                    <i className="icon fas fa-times"></i>
                    <label>fa-close</label>
                </div>
            </div>

            <div className="pretty p-icon p-toggle p-plain">
                <input type="checkbox" />
                <div className="state p-off">
                    <i className="icon far fa-heart"></i>
                    <label>fa-heart-o</label>
                </div>
                <div className="state p-on p-info-o">
                    <i className="icon fas fa-heart"></i>
                    <label>fa-heart</label>
                </div>
            </div>
        </div>
    )
}

export default IconCheckbox;