import React from "react";

const FormElements = props => {
    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        PlaceHolder
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control react-form-input"
                            placeholder="Place holder"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control react-form-input"
                            autoComplete=""
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        With Help Input
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control react-form-input"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Disabled</label>
                    <div className="col-sm-10">
                        <input
                            disabled
                            type="text"
                            className="form-control react-form-input"
                            placeholder="Disabled input here"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Static Control
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            readOnly
                            className="form-control-plaintext static-control-input theme-color"
                            id="staticEmail"
                            value="email@example.com"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Read Only</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control react-form-input"
                            value="email@example.com"
                            type="text"
                            placeholder="Readonly input here…"
                            readOnly
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Text Area</label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control react-form-input"
                            rows="3"
                        ></textarea>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">select</label>
                    <div className="col-sm-10">
                        <select
                            className="form-control react-form-input selectpicker"
                            data-style="btn-new"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        multiple select
                    </label>
                    <div className="col-sm-10">
                        <select
                            multiple
                            className="form-control react-form-input"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Range Input
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="range"
                            className="custom-range pt-7"
                            id="customRange1"
                        ></input>
                    </div>
                </div>

                <div className="form-group row theme-color">
                    <label className="col-sm-2 col-form-label">
                        File Input
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="file"
                            className="form-control-file"
                            id="exampleFormControlFile1"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Radio Buttons
                    </label>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline mt-7">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio3"
                                value="option3"
                                disabled
                            />
                            <label className="form-check-label">
                                3 (disabled)
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Checkboxes
                    </label>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
                                value="option1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="option2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox3"
                                value="option3"
                                disabled
                            />
                            <label className="form-check-label">
                                3 (disabled)
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormElements;
