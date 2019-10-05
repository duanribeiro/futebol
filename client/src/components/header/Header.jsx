import React, { useState, useE } from "react";
import HeaderWrapper from "./header.style";
import englishLang from "assets/images/uk.svg";
import chineseLang from "assets/images/china.svg";
import spanishLang from "assets/images/spain.svg";
import frenchLang from "assets/images/france.svg";
import italianLang from "assets/images/italy.svg";
import IntlMessages from "util/intlMessages";
import { Scrollbars } from "react-custom-scrollbars";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import {
    friend1,
    friend2,
    friend3,
    friend4,
    ProfileLockScreen
} from "helper/constant";
import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from "redux/auth/actions";
import { withRouter } from "react-router-dom";
import { AppName } from "helper/constant";

const { logout } = AuthActions;

const Header = props => {
    const [dashboardPopoverOpen, setDashboardPopoverOpen] = useState(false);
    const [notificationPopoverOpen, setNotificationPopoverOpen] = useState(
        false
    );
    const [languagePopover, setLanguagePopover] = useState(false);
    const [profilePopover, setProfilePopover] = useState(false);
    const { drawerMiniMethod, mini } = props;

    const userSignout = () => {
        props.logout();
    };

    const dashboardPopovertoggle = () => {
        setDashboardPopoverOpen(!dashboardPopoverOpen);
    };

    const notificationPopovertoggle = () => {
        setNotificationPopoverOpen(!notificationPopoverOpen);
    };

    const languagePopovertoggle = () => {
        setLanguagePopover(!languagePopover);
    };

    const profilePopovertoggle = () => {
        setProfilePopover(!profilePopover);
    };


    return (
        <HeaderWrapper {...props}>
            <div className="headerBack">
                <ul className="list-inline ma-0">
                    <li className="list-inline-item feed-text-area-icon">
                        <div className="drawer-handle-arrow">
                            {mini ? (
                                <button
                                    className="top-header-icon c-btn"
                                    onClick={drawerMiniMethod()}
                                >
                                    <i className="fas fa-arrow-right" />
                                </button>
                            ) : (
                                <button
                                    className="top-header-icon c-btn"
                                    onClick={drawerMiniMethod()}
                                >
                                    <i className="fas fa-arrow-left" />
                                </button>
                            )}
                        </div>
                        <div
                            className="mini-drawer-menu-icon"
                            onClick={drawerMiniMethod()}
                        >
                            <i className="fas fa-bars" />{" "}
                            <span className="app-name">{AppName}</span>
                        </div>
                    </li>
                    
                    
                </ul>
        
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
