import React from "react";
import { compose } from "redux";
import enhancer from "./enhancer/registerFormEnhancer";

const EditForm = props => {
    const {
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        submitCount,
        sidebarTheme
    } = props;

    const buttonBack = {
        backgroundColor: sidebarTheme.activeRouteBackColor,
        color: sidebarTheme.activeRouteTextColor
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
            return <span></span>;
        }
    };
    const handleSubmit = () => {
        let { values, isValid, handleSubmit } = props;

        if (isValid) {
            alert(JSON.stringify(values));
        }
        handleSubmit();
    };

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="firstname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
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
                        value={values.lastname}
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
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email"
                    />
                    <Error field="email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="phone_number"
                        value={values.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number"
                    />
                    <Error field="phone_number" />
                </div>

                <div className="form-group">
                    <label>Change Password</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Change Password"
                    />
                    <Error field="password" />
                </div>

                <button
                    style={buttonBack}
                    type="button"
                    className="btn form-button"
                    onClick={() => handleSubmit()}
                >
                    Edit
                </button>
            </form>
        </div>
    );
};

export default compose(enhancer)(EditForm);
