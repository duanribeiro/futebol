import React from "react";

const EditProfile = ({ titleStyle }) => {
    return (
        <div className="work-card">
            <div className="Work-header" style={titleStyle}>
                Edit Information
            </div>
            <div className="work-body">
                <form className="pa-24" onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="firstname"
                            placeholder="First Name"
                            defaultValue="Alice"
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="lastname"
                            placeholder="Last Name"
                            defaultValue="Blue"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control react-form-input"
                            id="email"
                            defaultValue="alice@gmail.com"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className="form-control react-form-input"
                            id="phone_number"
                            defaultValue="198 876 7897"
                        />
                    </div>

                    <button type="submit" className="c-btn c-outline-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
