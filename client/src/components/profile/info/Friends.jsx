import React from "react";
import {
    friend1,
    friend2,
    friend3,
    friend4,
    friend5,
    friend6
} from "helper/constant";

const Friends = ({ titleStyle }) => {
    return (
        <div className="work-card">
            <div className="Work-header" style={titleStyle}>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">Friends</li>
                    <li className="list-inline-item pull-right">
                        <span className="see-all-btn">See All</span>
                    </li>
                </ul>
            </div>

            <div className="work-body container-fluid pa-15">
                <div className="row">
                    <div className="col-4 pa-10">
                        <img
                            className="friend-image"
                            alt="friend"
                            src={friend1}
                        />
                    </div>
                    <div className="col-4 pa-10">
                        <img
                            className="friend-image"
                            alt="friend"
                            src={friend2}
                        />
                    </div>
                    <div className="col-4 pa-10">
                        <img
                            className="friend-image"
                            alt="friend"
                            src={friend3}
                        />
                    </div>
                    <div className="col-4 pa-10">
                        <img
                            className="friend-image"
                            alt="friend"
                            src={friend4}
                        />
                    </div>
                    <div className="col-4 pa-10">
                        <img
                            className="friend-image"
                            alt="friend"
                            src={friend5}
                        />
                    </div>
                    <div className="col-4 pa-10">
                        <img
                            className="friend-image"
                            alt="friend"
                            src={friend6}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;
