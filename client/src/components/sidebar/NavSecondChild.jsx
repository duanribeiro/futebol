import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, CardBody, Card } from "reactstrap";
import IntlMessages from "util/intlMessages";
import classNames from "classnames";

const NavSecondChild = props => {
    const [collapse, setCollapse] = useState(false);
    useEffect(() => {
        if (
            props.childList.child
                .map(a => a.routepath)
                .includes(props.CurrentRoute)
        ) {
            setCollapse(true);
        }
    }, []);
    const {
        listNameStyle,
        childList,
        mini,
        drawerWidth,
        miniDrawerWidth,
        CurrentRoute
    } = props;
    const toggle = e => {
        e.preventDefault();
        setCollapse(!collapse);
    };
    return (
        <ul className="pa-0">
            <li className="pos-relative">
                {!mini || miniDrawerWidth === drawerWidth ? (
                    collapse ? (
                        <i
                            className="fas fa-angle-up arrow-sidebar second-child-list-icon"
                            onClick={toggle}
                        />
                    ) : (
                        <i
                            className="fas fa-angle-down arrow-sidebar second-child-list-icon"
                            onClick={toggle}
                        />
                    )
                ) : (
                    ""
                )}
                <NavLink
                    to={"demo"}
                    onClick={toggle}
                    className={classNames(
                        childList.child
                            .map(a => a.routepath)
                            .includes(`/${CurrentRoute.split('/')[1]}`) && "active",
                        "nav-link",
                        "main-list"
                    )}
                >
                    <i className={childList.iconClass} />
                    <p style={listNameStyle}>
                        {<IntlMessages id={childList.listname} />}
                    </p>
                </NavLink>
                <Collapse isOpen={collapse}>
                    <Card className="background-transparent border-none">
                        <CardBody className="pa-0">
                            {childList.child
                                ? childList.child.map((listData, i) => {
                                      return (
                                          <NavLink
                                              to={listData.routepath}
                                              className="nav-link child-list"
                                              key={i}
                                          >
                                              <span className="span-shortname">
                                                  {listData.shortname}
                                              </span>
                                              <p style={listNameStyle}>
                                                  {
                                                      <IntlMessages
                                                          id={listData.listname}
                                                      />
                                                  }
                                              </p>
                                          </NavLink>
                                      );
                                  })
                                : ""}
                        </CardBody>
                    </Card>
                </Collapse>
            </li>
        </ul>
    );
};

export default NavSecondChild;
