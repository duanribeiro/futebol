import React from "react";

const Work = ({ titleStyle }) => {
    return (
        <div className="work-card">
            <div className="Work-header" style={titleStyle}>
                Work
            </div>

            <div className="work-body pa-15">
                <div className="pa-10">
                    <div className="Work-title">Profesion</div>
                    <div className="Work-text">Developer</div>
                </div>

                <div className="pa-10">
                    <div className="Work-title">Experience</div>
                    <div className="Work-text">5 years</div>
                </div>

                <div className="pa-10">
                    <div className="Work-title">Skill</div>
                    <div className="Work-text">
                        C, C++, HTML/CSS, VueJS, AngularJS, JavaScript, React js
                    </div>
                </div>

                <div className="pa-10">
                    <div className="Work-title">Jobs</div>
                    <div className="Work-text">Developer 2012 @TCS</div>
                </div>

                <div className="pa-10">
                    <div className="Work-title">Site</div>
                    <div className="Work-text">
                        See my work on <a href="hexesis.com">hexesis.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
