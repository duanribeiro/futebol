import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import IntlMessages from "util/intlMessages";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const PageTitle = ({ title, sidebarTheme, className, breadCrumb }) => {
    const titleStyle = {
        background: sidebarTheme.activeRouteBackColor,
        color: sidebarTheme.activeRouteTextColor,
        boxShadow: `0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px ${
            sidebarTheme.activeRouteBackColor
        }`
    };

    const titleColor = {
        color: sidebarTheme.activeRouteBackColor
    };

    return (
        <Fragment>
            <div className={classNames("Page-title", "ptb-15", className)}>
                <div className="title-icon" style={titleStyle}>
                    {title.substr(title.indexOf(".") + 1).substring(0, 2)}
                </div>
                <div style={titleColor} className="title flex-1 fs-16 bold-text">
                    <IntlMessages id={title} />
                </div>
                {/* <div className="roy-round-icon mr-2">
                    <i className="fas fa-redo-alt"></i>
                </div>
                <div className="roy-round-icon">
                    <i className="fas fa-ellipsis-v"></i>
                </div> */}
            </div>
            {breadCrumb && (
                <div>
                    <Breadcrumb className="custom-breadcumb">
                        {breadCrumb &&
                            breadCrumb.map((e, i) => {
                                if (i === breadCrumb.length - 1) {
                                    return (
                                        <BreadcrumbItem key={i} active>
                                            <IntlMessages id={e.name} />
                                        </BreadcrumbItem>
                                    );
                                } else {
                                    return (
                                        <BreadcrumbItem
                                            className="breadcumb-color"
                                            key={i}
                                        >
                                            <IntlMessages id={e.name} />
                                        </BreadcrumbItem>
                                    );
                                }
                            })
                        }
                        {/* <div className="roy-round-icon mr-2 ml-auto">
                            <i className="fas fa-redo-alt"></i>
                        </div>
                        <div className="roy-round-icon">
                            <i className="fas fa-ellipsis-v"></i>
                        </div> */}
                    </Breadcrumb>
                </div>
            )}
        </Fragment>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(PageTitle);
