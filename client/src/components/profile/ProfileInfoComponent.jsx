import React from "react";
import { ProfileLockScreen } from "./../../helper/constant";

const ProfileInfoComponent = ({ activeColor }) => {
    return (
        <div>
            <div className="text-center profile-image">
                <img src={ProfileLockScreen} alt="Name" />
                <div>
                    <button className="c-btn c-secondary mt-10">
                        <i className="fas fa-user-plus mr-10" /> Follow
                    </button>
                </div>
                <div>
                    <button className="c-btn c-secondary mt-10">
                        <i className="far fa-comment-alt mr-10" /> Message
                    </button>
                </div>
                <div>
                    <ul className="list-inline pt-20 theme-color">
                        <li className="list-inline-item mr-25">
                            <div style={activeColor}>500</div>
                            <div>
                                <strong>Followers</strong>
                            </div>
                        </li>
                        <li className="list-inline-item ml-25">
                            <div style={activeColor}>500</div>
                            <div>
                                <strong>Feeds</strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pa-10">
                <div style={activeColor} className="headline">
                    About
                </div>
                <div className="theme-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div style={activeColor} className="headline pt-16">
                    Interest
                </div>
                <div>
                    <button className="c-btn c-primary c-btn-round ma-5">
                        Music
                    </button>
                    <button className="c-btn c-secondary c-btn-round ma-5">
                        Movie
                    </button>
                    <button className="c-btn c-success c-btn-round ma-5">
                        Table-Tennis
                    </button>
                    <button className="c-btn c-info c-btn-round ma-5">
                        Reading
                    </button>
                    <button className="c-btn c-warning c-btn-round ma-5">
                        Dancing
                    </button>
                    <button className="c-btn c-danger c-btn-round ma-5">
                        Gaming
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfoComponent;
