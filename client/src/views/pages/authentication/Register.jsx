import React from "react";
import { loginBack, iconDemo } from "helper/constant";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import enhancer from "./enhancer/RegisterFormEnhancer";

const Register = props => {
    const handleRegister = e => {
        let { values, isValid, handleSubmit } = props;
        e.preventDefault();
        if (isValid) {
            console.log("Here is your form value", values);
            props.history.push("/login");
        }
        handleSubmit();
    };

    const { handleChange, handleBlur, errors, touched, submitCount } = props;

    const loginContainer = {
        backgroundImage: `url(${loginBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "fixed",
        overflow: "auto",
        top: 0,
        bottom: 0
    };

    const Error = props => {
        const field1 = props.field;
        if ((errors[field1] && touched[field1]) || submitCount > 0) {
            return (
                <span className={props.class ? props.class : "error-msg"}>
                    {errors[field1]}
                </span>
            );
        } else {
            return <span />;
        }
    };

    return (
        <div className="container-fluid" style={loginContainer}>
            <div>
                <div className="form-container">
                    <div className="login-icon">
                        <img src={iconDemo} alt="icon" height="100px" />
                    </div>
                    <div className="login-title">Create Account</div>
                    <form className="pa-24" onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control react-form-input"
                                id="firstname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="First Name"
                            />
                            <Error field="firstname" />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control react-form-input"
                                id="lastname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Last Name"
                            />
                            <Error field="lastname" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control react-form-input"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email"
                            />
                            <Error field="email" />
                        </div>

                        <div className="form-group">
                            <label>Create Password</label>
                            <input
                                type="text"
                                className="form-control react-form-input"
                                id="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Create Password"
                            />
                            <Error field="password" />
                        </div>

                        <div className="form-check text-center mtb-16">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="form-check-label register-privacy-text"
                                htmlFor="exampleCheck1"
                            >
                                Agree to{" "}
                                <a href="/register">terms & privacy policy</a>
                            </label>
                        </div>

                        <button type="submit" className="btn form-button">
                            Register
                        </button>
                        <div
                            className="text-center link-label"
                            onClick={() => props.history.push("/login")}
                        >
                            Login ?
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default compose(
    withRouter,
    enhancer
)(Register);
