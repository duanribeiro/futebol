import React from 'react';

const ColorsCheckbox = () => {
    return (
        <div>
            {/* <!-- primary --> */}
            <div className="pretty p-default">
                <input type="checkbox" />
                <div className="state p-primary">
                    <label>Primary</label>
                </div>
            </div>

            {/* <!-- success --> */}
            <div className="pretty p-default">
                <input type="checkbox" />
                <div className="state p-success">
                    <label>Success</label>
                </div>
            </div>

            {/* <!-- info --> */}
            <div className="pretty p-default">
                <input type="checkbox" />
                <div className="state p-info">
                    <label>Info</label>
                </div>
            </div>

            {/* <!-- warning --> */}
            <div className="pretty p-default">
                <input type="checkbox" />
                <div className="state p-warning">
                    <label>Warning</label>
                </div>
            </div>

            {/* <!-- danger --> */}
            <div className="pretty p-default">
                <input type="checkbox" />
                <div className="state p-danger">
                    <label>Danger</label>
                </div>
            </div>
            {/* ROund */}
            {/* <!-- primary --> */}
            <div className="pretty p-default p-round p-thick">
                <input type="checkbox" />
                <div className="state p-primary-o">
                    <label>Primary</label>
                </div>
            </div>

            {/* <!-- success --> */}
            <div className="pretty p-default p-round">
                <input type="checkbox" />
                <div className="state p-success-o">
                    <label>Success</label>
                </div>
            </div>

            {/* <!-- info --> */}
            <div className="pretty p-default p-fill">
                <input type="checkbox" />
                <div className="state p-info">
                    <label>Info</label>
                </div>
            </div>

            {/* <!-- warning --> */}
            <div className="pretty p-default p-curve p-thick">
                <input type="checkbox" />
                <div className="state p-warning">
                    <label>Warning</label>
                </div>
            </div>

            {/* <!-- danger --> */}
            <div className="pretty p-default p-curve p-thick">
                <input type="checkbox" />
                <div className="state p-danger-o">
                    <label>Danger</label>
                </div>
            </div>
        </div>
    )
}

export default ColorsCheckbox;