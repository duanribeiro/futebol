import React from "react";
import { compose } from "redux";
import enhancer from "./validator";

const UserForm = props => {
    const {
        handleChange,
        handleBlur,
        errors,
        touched,
        submitCount,
        onSubmit,
        values,
        action
    } = props;

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
            onSubmit(values, action);
        }
        handleSubmit();
    };

    return (
        <div>
            <form>
                <div className="form-group">
                    <label className="fs-16 medium-text">First Name</label>
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
                    <label className="fs-16 medium-text">Last Name</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="lastname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        placeholder="Last Name"
                    />
                    <Error field="lastname" />
                </div>

                <div className="form-group">
                    <label className="fs-16 medium-text">Email</label>
                    <input
                        type="email"
                        className="form-control react-form-input"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                    />
                    <Error field="email" />
                </div>

                <div className="form-group">
                    <label className="fs-16 medium-text">Phone Number</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="phone_number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone_number}
                        placeholder="Phone Number"
                    />
                    <Error field="phone_number" />
                </div>
                <div>
                    <button
                        type="button"
                        className="c-btn c-info form-button fs-16 demi-bold-text"
                        style={{ maxWidth: "125px" }}
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default compose(enhancer)(UserForm);
