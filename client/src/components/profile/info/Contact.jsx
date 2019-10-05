import React from "react";

const Contact = ({ titleStyle }) => {
    return (
        <div className="work-card">
            <div className="Work-header" style={titleStyle}>
                Contact
            </div>
            <div className="work-body pa-15">
                <div className="pa-10">
                    <div className="Work-title">Address</div>
                    <div className="Work-text">
                        3916 Williams Mine Road, Summit, New Jersey, ZipCode
                        07901
                    </div>
                </div>
                <div className="pa-10">
                    <div className="Work-title">Phone</div>
                    <div className="Work-text">908-746-6136</div>
                </div>
                <div className="pa-10">
                    <div className="Work-title">Website</div>
                    <div className="Work-text">hexesis.com</div>
                </div>
                <div className="pa-10">
                    <div className="Work-title">Email</div>
                    <div className="Work-text">envato@hexesis.com</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
