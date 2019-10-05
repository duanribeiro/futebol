import React from "react";
import { errorback } from "helper/constant";

const Error400 = (props) => {
    const errorContainerBack = {
        backgroundImage: `url(${errorback})`,
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
                            <div className="error-heading">404</div>
                            <div className="error-sub-title">
                                Sorry but we could not find the page you are
                                looking for
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

export default Error400;
