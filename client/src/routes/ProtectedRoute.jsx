import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

export const ProtectedRoute = ({ authData, children }) => {
    return (
        <div>
            {authData.isLogin ? (
                <Fragment>{children}</Fragment>
            ) : (
                <Redirect to={"/login"} />
            )}
        </div>
    );
};
