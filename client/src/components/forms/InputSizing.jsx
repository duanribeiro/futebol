import React from "react";

const InputSizing = props => {
    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Input Large
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control form-control-lg react-form-input"
                            placeholder=".form-control-lg"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Input Default
                    </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control react-form-input"
                            type="text"
                            placeholder="Default input"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label pb-0">
                        Input Small
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control form-control-sm react-form-input"
                            placeholder=".form-control-sm"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Select Large
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control form-control-lg react-form-input">
                            <option>Large select</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Select Default
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control react-form-input">
                            <option>Default select</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Select Small
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control form-control-sm  react-form-input">
                            <option>Small select</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputSizing;
