import React from 'react';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';
import browserHistory from 'react-router/lib/browserHistory';
/*
* 
*/
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Login from './login/login';

export default class Application extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={2}
                    style={{ overflow: 'auto' }}>                    
                    <AppBar
                            title="Login"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                        <Router history={browserHistory}>
                            <Route path="/" component={Login}>
                            </Route>
                        </Router>
                </Paper>
            </MuiThemeProvider>

        );
    }
}
