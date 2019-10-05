import React from 'react';

const DisableCheckbox = () => {
    return (
        <div>
            {/* <!-- Checked --> */}
            <div className="pretty p-icon p-round">
                <input type="checkbox" checked disabled/>
                <div className="state p-success">
                    <i className="icon mdi mdi-check"></i>
                    <label>Checked</label>
                </div>
            </div>

            {/* <!-- Not Checked --> */}
            <div className="pretty p-default p-round">
                <input type="checkbox" disabled/>
                <div className="state">
                    <label>Not checked</label>
                </div>
            </div>
        </div>
    )
}

export default DisableCheckbox;