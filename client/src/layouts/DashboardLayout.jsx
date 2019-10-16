import React, { useState, useRef, useMemo } from "react";
import Sidebar from "components/sidebar/Sidebar";
import dashboardRoutes from "routes/dashboardRoutes";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import themeActions from "redux/themeChanger/actions.js";
import settingactions from "redux/themeSettings/actions";
import AppLocale from "languageProvider";
import {
    drawerWidth,
    miniDrawerWidth,
} from "helper/constant";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { ProtectedRoute } from "./../routes/ProtectedRoute";
import { Scrollbars } from "react-custom-scrollbars";
import GlobalWrapper from "./global.style";
const { changeTheme } = themeActions;
const { sidebarMini } = settingactions;

const DashboardLayout = props => {
    const [mini, setMini] = useState(
        props.themeSetting.sidebarMiniValue
            ? props.themeSetting.sidebarMiniValue === "on"
            : false
    );
    const [statedrawerWidth] = useState(drawerWidth);
    const [stateminiDrawerWidth, setStateminiDrawerWidth] = useState(
        miniDrawerWidth
    );
    const mainPanel = useRef(null);
    const scrollbars = useRef(null);


    let routeScrollHeight;  

    const { layoutTheme, locale, themeSetting } = props;
    const currentAppLocale = AppLocale[locale];

    const drawerMiniMethod = () => {
        if (mini) {
            setMini(true);
        } else {
            setMini(true);
        }
    };


    return (
        <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
        >
            <GlobalWrapper {...props}>
                <div
                    id="main-panel"
                    className="main-panel"
                >
                        <Header
                            drawerMiniMethod={() => drawerMiniMethod}
                            mini={mini}
                            drawerWidth={statedrawerWidth}
                            miniDrawerWidth={stateminiDrawerWidth}
                            {...props}
                        />

                    <Scrollbars style={routeScrollHeight} ref={scrollbars}>
                        {/* Route Layout Start*/}
                        <div
                            className="route-height"
                            style={
                                themeSetting.toolbarDisplayValue === "show"
                                    ? {
                                          background:
                                              layoutTheme.backgroundColor
                                      }
                                    : {
                                          background:
                                              layoutTheme.backgroundColor
                                      }
                            }
                        >
                            <Switch>
                                <ProtectedRoute {...props}>
                                    {dashboardRoutes.map((prop, key) => {
                                        return (
                                            <Route
                                                exact
                                                path={prop.path}
                                                component={prop.component}
                                                key={key}
                                            />
                                        );
                                    })}
                                </ProtectedRoute>
                            </Switch>
                        </div>
                        {/* Route Layout Finish*/}
                    </Scrollbars>
                </div>
            </GlobalWrapper>
        </IntlProvider>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger,
        LanguageSwitcher: state.LanguageSwitcher,
        locale: state.LanguageSwitcher.language.locale,
        authData: {
            token: state.auth.accessToken,
            isLogin: state.auth.isLogin
        },
        themeSetting: {
            toolbarAlignValue: state.themeSetting.toolbarAlignValue,
            footerAlignValue: state.themeSetting.footerAlignValue,
            sidebarDisplayValue: state.themeSetting.sidebarDisplayValue,
            toolbarDisplayValue: state.themeSetting.toolbarDisplayValue,
            footerDisplayValue: state.themeSetting.footerDisplayValue,
            sidebarTransParentValue: state.themeSetting.sidebarTransParentValue,
            transparentImage: state.themeSetting.transparentImage,
            activeLinkStyle: state.themeSetting.activeLinkStyle,
            sidebarMiniValue: state.themeSetting.sidebarMiniValue,
            sidebarTransParentActiveBack:
                state.themeSetting.sidebarTransParentActiveBack,
            sidebarTransParentActiveColor:
                state.themeSetting.sidebarTransParentActiveColor
        }
    };
};

export default connect(
    mapStateToProps,
    {
        changeTheme,
        sidebarMini
    }
)(DashboardLayout);
