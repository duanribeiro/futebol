import React from "react";
import EditProfile from "./EditProfile";
import Work from "./Work";
import Contact from "./Contact";
import Friends from "./Friends";
import Albums from "./Albums";

const Info = ({ titleStyle }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-xl-6">
                    <EditProfile titleStyle={titleStyle} />
                    <Work titleStyle={titleStyle} />
                    <Contact titleStyle={titleStyle} />
                </div>
                <div className="col-md-12 col-xl-6">
                    <Friends titleStyle={titleStyle} />
                    <Albums titleStyle={titleStyle} />
                </div>
            </div>
        </div>
    );
};

export default Info;
