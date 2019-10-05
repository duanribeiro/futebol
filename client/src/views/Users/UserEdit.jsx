import React, { useEffect, useState } from "react";
import UserWrapper from "./user.style";
import PageTitle from "components/common/PageTitle";
import UserForm from "components/users/UserForm";
import { dummyData } from "util/data/reactTableData";
import { connect } from "react-redux";

const UserEdit = props => {
    const [editedData, setEditedData] = useState(null);
    const hasParam = props.match.params.hasOwnProperty("id");

    useEffect(() => {
        if (hasParam) {
            const data = dummyData.find(
                a => String(a.id) === props.match.params.id
            );
            setEditedData(data);
        }
    }, []);

    const submitFormHandler = (data, action) => {
        console.log("data is here", data);
        if (action === "add") {
            alert("this is the event you can call apis and add user");
        } else if (action === "edit") {
            alert("this is the event you can call apis and edit user");
        }
    };

    return (
        <UserWrapper {...props}>
            <div className="pos-relative">
                <PageTitle
                    title="sidebar.users"
                    className="plr-15"
                    breadCrumb={[
                        {
                            name: "sidebar.dashboard"
                        },
                        {
                            name: "sidebar.users"
                        },
                        {
                            name: hasParam ? "action.edit" : "action.add"
                        }
                    ]}
                />
                <div
                    className="back-icon fs-15 demi-bold-text cursor-pointer"
                    onClick={() => props.history.push("/users")}
                >
                    <i className="fas fa-step-backward"></i> Backward
                </div>
            </div>
            <div className="plr-15">
                <div className="roe-card-style mtb-15">
                    <div className="roe-card-header module-header">
                        <div className="flex-1 fs-16 demi-bold-text">
                            <span className="hash"># </span>{" "}
                            {hasParam ? "Edit" : "Add"} User
                        </div>
                    </div>
                    <div className="roe-card-body">
                        <UserForm
                            onSubmit={submitFormHandler}
                            editedData={editedData}
                            action={hasParam ? "edit" : "add"}
                        />
                    </div>
                </div>
            </div>
        </UserWrapper>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(UserEdit);
