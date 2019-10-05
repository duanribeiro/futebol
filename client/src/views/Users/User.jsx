import React from "react";
import UserWrapper from "./user.style";
import PageTitle from "components/common/PageTitle";
import UserTable from "components/users/UserTable";
import { connect } from "react-redux";

const User = props => {
    return (
        <UserWrapper {...props}>
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
                        name: "sidebar.lists"
                    }
                ]}
            />
            <div className="user-tbl">
                <UserTable {...props} />
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
)(User);
