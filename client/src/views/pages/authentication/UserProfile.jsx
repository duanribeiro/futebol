import React, { useState } from "react";
import { connect } from "react-redux";
import { loginBack } from "helper/constant";
import ProfileInfoComponent from "components/profile/ProfileInfoComponent";
import Feed from "components/profile/feed/Feed";
import Media from "components/profile/media/Media";
import Info from "components/profile/info/Info";

const UserProfile = ({ sidebarTheme }) => {
    const [feed, setFeed] = useState(true);
    const [media, setMedia] = useState(false);
    const [info, setInfo] = useState(false);

    const activePanel = data => {
        setFeed(false);
        setMedia(false);
        setInfo(false);
        if (data === "feed") {
            setFeed(true);
        } else if (data === "media") {
            setMedia(true);
        } else if (data === "info") {
            setInfo(true);
        }
    };

    const Back = {
        backgroundImage: `url(${loginBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };

    const titleStyle = {
        background: sidebarTheme.activeColor,
        color: sidebarTheme.textColor,
        fontWeight: 600
    };
    const activeColor = {
        color: sidebarTheme.activeColor
    };

    const profileTabLink = {
        borderBottom: `2px solid`,
        borderColor: sidebarTheme.activeColor
    };

    return (
        <div className="Profile-component">
            <div style={Back} className="background" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-3 profile-left-shade">
                        <ProfileInfoComponent activeColor={activeColor} />
                    </div>

                    <div className="col-md-12 col-lg-8 col-xl-9 profile-right-shade">
                        <div className="profile-header-panel pa-10">
                            <div className="headline">Alice Blue</div>
                            <div>Software Engineer</div>
                            <button className="c-btn c-danger c-btn-round c-btn-lg send-req-btn">
                                <i className="fas fa-plus mr-10" /> Send Request
                            </button>
                        </div>

                        <div className="pl-10">
                            <ul className="list-inline theme-color">
                                <li
                                    style={feed ? profileTabLink : {}}
                                    className="list-inline-item profile-list"
                                    onClick={() => activePanel("feed")}
                                >
                                    FEEDS
                                </li>
                                <li
                                    style={info ? profileTabLink : {}}
                                    className="list-inline-item profile-list"
                                    onClick={() => activePanel("info")}
                                >
                                    INFO
                                </li>
                                <li
                                    style={media ? profileTabLink : {}}
                                    className="list-inline-item profile-list"
                                    onClick={() => activePanel("media")}
                                >
                                    MEDIA
                                </li>
                            </ul>
                        </div>

                        <div>
                            {feed ? (
                                <Feed />
                            ) : info ? (
                                <Info titleStyle={titleStyle} />
                            ) : (
                                <Media />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(UserProfile);
