// react
import React from 'react';
import ReactDOM from 'react-dom';

//react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//containers
import AppContainer from './containers/appContainer';
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
//css
import './css/index.css';

//pages
import Home from './components/home';
import Partners from './components/partners';
import Outreach from './components/outreach';
import Cooperation from './components/cooperation';
import Contact from './components/contact';
import Introduction from './components/project/introduction';
import Background from './components/project/background';
import Objective from './components/project/objective';
import Partecipate from './components/project/partecipate';
import Impacts from './components/project/impacts';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    fontFamily: 'Armata',
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer} >
        <IndexRoute component={Home}/>
        <Route path='project'>
          <Route path='introduction' component={Introduction} />
          <Route path='background' component={Background} />
          <Route path='objective' component={Objective} />
          <Route path='impacts' component={Impacts} />
          <Route path='partners' component={Partners} />
          <Route path='partecipate' component={Partecipate} />
        </Route>
        <Route path='partners' component={Partners} />
        <Route path='outreach' component={Outreach} />
        <Route path='cooperation' component={Cooperation} />
        <Route path='contact' component={Contact} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
