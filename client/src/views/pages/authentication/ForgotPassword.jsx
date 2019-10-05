import React from "react";
import { loginBack, ForgotIcon } from "helper/constant";

const ForgotPassword = () => {
    const loginContainer = {
        backgroundImage: `url(${loginBack})`,
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
                <div className="login-icon">
                    <img src={ForgotIcon} alt="icon" height="100px" />
                </div>
                <div className="login-title">Forgot Password ?</div>
                <div className="text-center form-info-text plr-24 mt-16">
                    Provide your e-mail address to reset your password
                </div>
                <form className="pa-24" onSubmit={(e) =>  e.preventDefault()}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control react-form-input"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <button type="submit" className="btn form-button">
                        Get OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
