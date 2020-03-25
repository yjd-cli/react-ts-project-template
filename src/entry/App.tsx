import './App.css';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalContext from '@common/global-context';
import { renderAllRoutes } from '@routes/route-loader';
import { connect } from 'react-redux';
// import * as utils from "@src/utils";

interface AppProps {
    routes?: any;
}
class App extends React.PureComponent<AppProps> {
    globalContext;

    constructor(props) {
        super(props);
        this.globalContext = {};
    }

    render() {
        const routes = renderAllRoutes(this.props.routes);
        return (
            <GlobalContext.Provider value={this.globalContext}>
                <Switch>{routes}</Switch>
            </GlobalContext.Provider>
        );
    }
}

export default App;
