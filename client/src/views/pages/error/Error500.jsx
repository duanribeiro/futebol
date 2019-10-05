import React from "react";
import { locakscreenBack } from "helper/constant";

const Error500 = (props) => {
    const errorContainerBack = {
        backgroundImage: `url(${locakscreenBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
    };

    return (
        <div>
            <div
                className="container-fluid error-back"
                style={errorContainerBack}
            >
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-3" />
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                        <div
                            className="error-container"
                            style={errorContainerBack}
                        >
                            <div className="error-heading">500</div>
                            <div className="error-sub-title">
                                Whoops! Internal Server Error
                            </div>
                            <button
                                className="goHome"
                                onClick={() => props.history.push("/")}
                            >
                                Go Home
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3" />
                </div>
            </div>
        </div>
    );
};

export default Error500;
