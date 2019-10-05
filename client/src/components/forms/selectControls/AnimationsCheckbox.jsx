import React from 'react';

const AnimationsCheckbox = () => {
    return (
        <div>
            <div className="pretty p-default p-round p-smooth">
                <input type="checkbox" />
                <div className="state p-primary">
                    <label>Monday</label>
                </div>
            </div>

            <div className="pretty p-icon p-round p-smooth">
                <input type="checkbox" />
                <div className="state p-success">
                    <i className="icon fas fa-check"></i>
                    <label>Tuesday</label>
                </div>
            </div>

            <div className="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div className="state p-danger-o">
                <i className="icon fas fa-check"></i>
                    <label>Wednesday</label>
                </div>
            </div>

            <div className="pretty p-default p-curve p-thick p-smooth">
                <input type="checkbox" />
                <div className="state p-warning">
                    <label>Thursday</label>
                </div>
            </div>

            <div className="pretty p-default p-curve p-thick p-smooth">
                <input type="checkbox" />
                <div className="state p-danger-o">
                    <label>Friday</label>
                </div>
            </div>

            <div className="pretty p-icon p-rotate">
                <input type="checkbox" />
                <div className="state p-success">
                    <i className="icon mdi mdi-check"></i>
                    <label>Friends</label>
                </div>
            </div>

            <div className="pretty p-default p-thick p-pulse">
                <input type="checkbox" />
                <div className="state p-warning-o">
                    <label>Occasionally</label>
                </div>
            </div>
        </div>
    )
}

export default AnimationsCheckbox;