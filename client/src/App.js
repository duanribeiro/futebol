import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
// Redux store provider
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
// Style Root for making media queries to inline css
import { StyleRoot } from "radium";
// Layout Routes
import layoutRoutes from "./routes/index.jsx";
import themes from "./settings/themes";
import { themeConfig } from "./settings";

import "./assets/scss/app.scss";
import "pretty-checkbox/src/pretty-checkbox.scss";


const App = props => {
    return (
            <ThemeProvider theme={themes[themeConfig.theme]}>
                <StyleRoot>
                    <Provider store={store}>
                        {/*Start layout routes */}
                        <Router history={history}>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => <Redirect to="/Intro" />}
                                />
                                {layoutRoutes.map((prop, key) => {
                                    return (
                                        <Route
                                            path={prop.path}
                                            component={prop.component}
                                            key={key}
                                            history={history}
                                        />
                                    );
                                })}
                            </Switch>
                        </Router>
                        {/*End layout routes */}
                    </Provider>
                </StyleRoot>
            </ThemeProvider>
    );
};

export default App;

// If you want to choose different color schema go to settings/index.jsx and set your theme and language.

// If you want to change sidebar nav list then go to util/data/sidebar.jsx
