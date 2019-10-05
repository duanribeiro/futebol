import React from 'react';

const Switch = () => {
    return (
        <div>
            <div className="pretty p-switch">
                <input type="checkbox" />
                <div className="state">
                    <label>Outline</label>
                </div>
            </div>

            {/* <!-- add className p-switch --> */}
            <div className="pretty p-switch p-fill">
                <input type="checkbox" />
                <div className="state">
                    <label>Fill</label>
                </div>
            </div>

            {/* <!-- add className p-switch --> */}
            <div className="pretty p-switch p-slim">
                <input type="checkbox" />
                <div className="state">
                    <label>Slim</label>
                </div>
            </div>
        </div>
    )
}

export default Switch;