import React, { useState, useE } from "react";
import HeaderWrapper from "./header.style";
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from "redux/auth/actions";
import { withRouter } from "react-router-dom";
import { AppName } from "helper/constant";

const { logout } = AuthActions;

const Header = props => {

    return (
        <HeaderWrapper {...props}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}} className="headerBack">
                <button
                    className="top-header-icon fas fa-home"
                />
                <button
                    className="top-header-icon fas fa-bookmark"
                />
                <button
                    className="top-header-icon fas fa-code-branch"
                />
                <button
                    className="top-header-icon fab fa-trello"
                />
            </div>

        </HeaderWrapper>
    );
};

export default compose(
    withRouter,
    connect(
        null,
        { logout }
    )
)(Header);
