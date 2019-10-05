import React from "react";

const HorizontalForm = props => {
    const { sidebarTheme } = props;

    const buttonBack = {
        backgroundColor: sidebarTheme.activeRouteBackColor,
        color: sidebarTheme.activeRouteTextColor
    };

    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            aria-describedby="emailHelp"
                            placeholder="First Name"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Last Name</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            aria-describedby="emailHelp"
                            placeholder="Last Name"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input
                            type="email"
                            className="form-control react-form-input"
                            aria-describedby="emailHelp"
                            placeholder="email"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input
                            type="password"
                            className="form-control react-form-input"
                            placeholder="Password"
                            autoComplete=""
                        />
                    </div>
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

export default HorizontalForm;
