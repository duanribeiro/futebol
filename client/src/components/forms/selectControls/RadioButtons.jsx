import React from 'react';

const RadioButtons = () => {
    return (
        <div>
            <div className="pretty p-default p-round">
                <input type="radio" name="radio1"/>
                <div className="state">
                    <label>Male</label>
                </div>
            </div>

            <div className="pretty p-default p-round">
                <input type="radio" name="radio1"/>
                <div className="state">
                    <label>Female</label>
                </div>
            </div>

            <div className="pretty p-default p-round">
                <input type="radio" name="radio1"/>
                <div className="state">
                    <label>Special</label>
                </div>
            </div>
        </div>
    )
}

export default RadioButtons;