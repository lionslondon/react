import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import withRouter from 'react-router/lib/withRouter';
injectTapEventPlugin();
/*
* Layout Components
*/
import defaultTheme from '../common/defaultTheme';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: null
    }
    //RouteService(this.props.router);
  }
  //#TODO: fetch backgroundImage,styles from api
  componentDidMount() {
    this.fetchTheme();
    // setTimeout(function () {   document.body.style.backgroundImage =
    // "url('/images/bg-default.jpg')" }, 1000);
  }

  fetchTheme() {
    let qtheme = getMuiTheme(defaultTheme);
    this.setState({theme: qtheme});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.theme}>
        <div>
          hi
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(Login);