import React, { useState, useE } from "react";
import HeaderWrapper from "./header.style";
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from "redux/auth/actions";
import { withRouter, Link} from "react-router-dom";
import { AppName } from "helper/constant";
import GithubCorner from 'react-github-corners'
import 'react-github-corners/dist/GithubCorner.css'

const { logout } = AuthActions;

const Header = props => {

    return (
        <HeaderWrapper {...props}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}
            className="headerBack"
            >
            <GithubCorner
              url='https://github.com/duanribeiro/futebol'
            />

            
            <Link to="/">
                <button className="top-header-icon fas fa-lg fa-home" />
            </Link>


            <button
                    onClick = { 
                    () => {window.open('https://trello.com/b/hIgiJDFl/futebol')}
                }
                className="top-header-icon fab fa-lg fa-trello"
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