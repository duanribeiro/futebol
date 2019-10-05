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

    useMemo(() => {
        if (scrollbars && scrollbars.current) {
            scrollbars.current.scrollToTop(0);
        }
    }, [props.location]);

    // Aqui muda a inicialização da barra do ladinho.
    useMemo(() => {
        setMini(props.themeSetting.sidebarMiniValue == "off");
    }, [props.themeSetting.sidebarMiniValue]);

    let routeScrollHeight;

    const { layoutTheme, locale, themeSetting } = props;
    const currentAppLocale = AppLocale[locale];

    let routeArrowIcon = {
        backgroundColor: props.sidebarTheme.backgroundColor,
        color: props.sidebarTheme.textColor,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        position: "fixed",
        zIndex: 1,
        fontSize: "18px",
        padding: "4px 5px"
    };

    if (
        themeSetting.toolbarDisplayValue === "hide" &&
        themeSetting.footerDisplayValue === "hide"
    ) {
        routeScrollHeight = {
            height: "calc(100vh - 0px)"
        };
    } else if (themeSetting.toolbarDisplayValue === "hide") {
        routeScrollHeight = {
            height: "calc(100vh - 0px)"
        };
    } else if (themeSetting.footerDisplayValue === "hide") {
        routeScrollHeight = {
            height: "calc(100vh - 0px)"
        };
    } else {
        routeScrollHeight = {
            height: "calc(100vh - 0px)"
        };
    }

    const mainPanelWidth = {
        width: mini
            ? `calc(100% - ${miniDrawerWidth})`
            : `calc(100% - ${drawerWidth})`,
        backgroundColor: layoutTheme.backgroundColor
    };

    const drawerMiniMethod = () => {
        if (mini) {
            setMini(false);
        } else {
            setMini(true);
        }
    };

    const mouseEnter = () => {
        if (mini) {
            setStateminiDrawerWidth(drawerWidth);
        }
    };

    const mouseLeave = () => {
        if (mini) {
            setStateminiDrawerWidth(miniDrawerWidth);
        }
    };

    const closeDrawer = () => {
        setMini(true);
    };
    return (
        <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
        >
            <GlobalWrapper {...props}>
                <Sidebar
                    mini={mini}
                    drawerWidth={statedrawerWidth}
                    miniDrawerWidth={stateminiDrawerWidth}
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    closeDrawer={() => closeDrawer}
                    {...props}
                />

                <div
                    id="main-panel"
                    className="main-panel"
                    ref={mainPanel}
                    style={mainPanelWidth}
                >
                    {props.themeSetting.toolbarDisplayValue === "show" && (
                        <Header
                            drawerMiniMethod={() => drawerMiniMethod}
                            mini={mini}
                            drawerWidth={statedrawerWidth}
                            miniDrawerWidth={stateminiDrawerWidth}
                            {...props}
                        />
                    )}

                    {themeSetting.toolbarDisplayValue !== "show" && (
                        <button
                            style={routeArrowIcon}
                            className="c-btn mini-drawer-menu-icon-hide-topbar"
                            onClick={drawerMiniMethod}
                        >
                            <i className="fas fa-bars" />
                        </button>
                    )}

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
