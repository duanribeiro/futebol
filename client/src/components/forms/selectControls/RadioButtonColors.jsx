import React from 'react';

const RadioButtonColors = () => {
    return (
        <div>
            <div className="pretty p-default p-curve">
                <input type="radio" name="color" />
                <div className="state p-primary-o">
                    <label>Primary</label>
                </div>
            </div>

            <div className="pretty p-default p-curve">
                <input type="radio" name="color" />
                <div className="state p-success-o">
                    <label>Success</label>
                </div>
            </div>

            <div className="pretty p-default p-curve">
                <input type="radio" name="color" />
                <div className="state p-info-o">
                    <label>Info</label>
                </div>
            </div>

            <div className="pretty p-default p-curve">
                <input type="radio" name="color" />
                <div className="state p-warning-o">
                    <label>Warning</label>
                </div>
            </div>

            <div className="pretty p-default p-curve">
                <input type="radio" name="color" />
                <div className="state p-danger-o">
                    <label>Danger</label>
                </div>
            </div>
        </div>
    )
}

export default RadioButtonColors;