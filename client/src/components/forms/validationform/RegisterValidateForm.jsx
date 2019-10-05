import React, { useState } from "react";
import { compose } from "redux";
import SweetAlert from "react-bootstrap-sweetalert";
import enhancer from "./enhancer/registerFormEnhancer";

const RegisterValidateForm = props => {
    const [basicAlert, setBasicAlert] = useState(false);
    const [formData, setFormData] = useState("");

    const toggleBasicAlert = () => {
        setBasicAlert(!basicAlert);
    };

    const handleSubmit = () => {
        let { values, isValid, handleSubmit } = props;

        if (isValid) {
            setFormData(values);
            toggleBasicAlert();
        }
        handleSubmit();
    };

    const {
        handleChange,
        handleBlur,
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

    return (
        <div>
            <SweetAlert
                title="Details"
                onConfirm={toggleBasicAlert}
                show={basicAlert}
                confirmBtnCssClass="sweet-alert-confirm-button"
                cancelBtnCssClass="sweet-alert-cancle-button"
            >
                <div>
                    Firstname: <span> {formData.firstname}</span>
                </div>
                <div>
                    Lastname: <span> {formData.lastname}</span>
                </div>
                <div>
                    Email: <span> {formData.email}</span>
                </div>
                <div>
                    PhoneNumber: <span> {formData.phone_number}</span>
                </div>
            </SweetAlert>

            <form>
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
                    <label>Phone Number</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="phone_number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number"
                    />
                    <Error field="phone_number" />
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

                <button
                    style={buttonBack}
                    type="button"
                    className="btn form-button"
                    onClick={() => handleSubmit()}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default compose(enhancer)(RegisterValidateForm);
