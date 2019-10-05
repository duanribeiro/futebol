import React from 'react';

const BasicCheckbox = () => {
    return (
        <div>
            {/* <!-- add class p-default --> */}
            <div className="mtb-8 pretty p-default">
                <input type="checkbox" />
                <div className="state">
                    <label>Default</label>
                </div>
            </div>

            {/* <!-- add className p-fill --> */}
            <div className="mtb-8 pretty p-default p-fill">
                <input type="checkbox" />
                <div className="state">
                    <label>Fill</label>
                </div>
            </div>

            {/* <!-- add className p-thick --> */}
            <div className="mtb-8 pretty p-default p-thick">
                <input type="checkbox" />
                <div className="state">
                    <label>Thick</label>
                </div>
            </div>

            {/* <!-- add className p-curve --> */}
            <div className="mtb-8 pretty p-default p-curve">
                <input type="checkbox" />
                <div className="state">
                    <label>Default</label>
                </div>
            </div>

            <div className="mtb-8 pretty p-default p-curve p-fill">
                <input type="checkbox" />
                <div className="state">
                    <label>Fill</label>
                </div>
            </div>

            <div className="mtb-8 pretty p-default p-curve p-thick">
                <input type="checkbox" />
                <div className="state">
                    <label>Thick</label>
                </div>
            </div>

            {/* <!-- add className p-round --> */}
            <div className="mtb-8 pretty p-default p-round">
                <input type="checkbox" />
                <div className="state">
                    <label>Default</label>
                </div>
            </div>

            <div className="mtb-8 pretty p-default p-round p-fill">
                <input type="checkbox" />
                <div className="state">
                    <label>Fill</label>
                </div>
            </div>

            <div className="mtb-8 pretty p-default p-round p-thick">
                <input type="checkbox" />
                <div className="state">
                    <label>Thick</label>
                </div>
            </div>
        </div>
    )
}

export default BasicCheckbox;