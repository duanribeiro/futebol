import React from "react";

const SimpleForm = props => {
    const { sidebarTheme } = props;

    const buttonBack = {
        backgroundColor: sidebarTheme.activeRouteBackColor,
        color: sidebarTheme.activeRouteTextColor
    };

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control react-form-input"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control react-form-input"
                        placeholder="Password"
                        autoComplete=""
                    />
                </div>

                <div className="form-check text-center mtb-16">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Remember me
                    </label>
                </div>

                <button
                    style={buttonBack}
                    type="submit"
                    className="btn form-button"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SimpleForm;
