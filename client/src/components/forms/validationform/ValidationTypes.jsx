import React from "react";
import { compose } from "redux";
import enhancer from "./enhancer/ValidationTypeEnhancer";

const ValidationTypes = props => {
    const { handleChange, handleBlur, errors, touched, submitCount } = props;

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
            <form>
                <div className="form-group row">
                    <label className="col-sm-2">Required Input</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="require"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="require" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="email" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2">Phone Number</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="phone_number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="phone_number" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2">Password</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="password" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2">Url</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="url"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="url" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2">Number</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="numberonly"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="numberonly" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2">Equal to</label>
                    <div className="col-sm-5">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="field1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="field1" />
                    </div>
                    <div className="col-sm-5">
                        <input
                            type="text"
                            className="form-control react-form-input mobile-ma-8"
                            id="field2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Error field="field2" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default compose(enhancer)(ValidationTypes);
