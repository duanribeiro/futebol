import React from 'react';

const ToggleCheckbox = () => {
    return (
        <div>
            <div className="pretty p-default p-curve p-toggle">
                <input type="checkbox" />
                <div className="state p-success p-on">
                    <label>Subscribed</label>
                </div>
                <div className="state p-danger p-off">
                    <label>Subscribe </label>
                </div>
            </div>

            <div className="pretty p-icon p-toggle">
                <input type="checkbox" />
                <div className="state p-on">
                    <i className="icon fas fa-microphone-alt"></i>
                    <label>ON</label>
                </div>
                <div className="state p-off">
                    <i className="icon fas fa-microphone-alt-slash"></i>
                    <label>OFF</label>
                </div>
            </div>

            <div className="pretty p-icon p-toggle p-plain">
                <input type="checkbox" />
                <div className="state p-success-o p-on">
                    <i className="icon fas fa-eye"></i>
                    <label>Show preview</label>
                </div>
                <div className="state p-off">
                    <i className="icon fas fa-eye-slash"></i>
                    <label>Hide preview</label>
                </div>
            </div>

            <div className="pretty p-icon p-toggle p-plain">
                <input type="checkbox" />
                <div className="state p-success-o p-off">
                    <i className="icon fas fa-thumbs-up"></i>
                    <label>Good</label>
                </div>
                <div className="state p-danger-o p-on">
                    <i className="icon fas fa-thumbs-down"></i>
                    <label>Bad</label>
                </div>
            </div>
        </div>
    )
}

export default ToggleCheckbox;