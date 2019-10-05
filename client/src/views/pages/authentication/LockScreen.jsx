import React from "react";
import { locakscreenBack, ProfileLockScreen } from "helper/constant";

const LockScreen = (props) => {
    const loginContainer = {
        backgroundImage: `url(${locakscreenBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "fixed",
        overflow: "auto",
        top: 0,
        bottom: 0
    };

    return (
        <div className="container-fluid" style={loginContainer}>
            <div className="form-container">
                <div className="login-icon lock-screen-profile">
                    <img src={ProfileLockScreen} alt="icon" height="100px" />
                </div>
                <div className="login-title">Alice Blue</div>
                <div className="text-center form-info-text plr-24 mt-16">
                    Your session is locked due to no activity. Enter your
                    password to continue.
                </div>
                <form className="pa-24" onSubmit={(e) =>  e.preventDefault()}>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control react-form-input"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn form-button">
                        Login
                    </button>
                    <div
                        className="text-center link-label"
                        onClick={() => props.history.push("/login")}
                    >
                        Use Another Account ?
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LockScreen;
