// react
import React from 'react';
import ReactDOM from 'react-dom';

//react-router
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
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

//components-pages
import Home from './components/home';
import Partners from './components/partners';
import Outreach from './components/outreach';
import People from './components/people';
import Project from './components/project';
import Cooperation from './components/project/cooperation';
import Stakeholders from './components/stakeholders';
import LinkPage from './components/linkpage';
import Results from './components/results';
import Advisoryboard from './components/advisoryboard'
import Presentations from './components/presentations';
import Videos from './components/videos';
import Materials from './components/materials';
import Workingpackages from './components/workingpackages';
import Governance from './components/governance';
import Casestudy from './components/casestudy';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    fontFamily: 'Armata',
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer} >
        <IndexRoute component={Home}/>
        <Route path='project/:value' component={Project}/>
        <Route path='workingpackages' component={Workingpackages} />
        <Route path='casestudy' component={Casestudy} />
        <Route path='governance' component={Governance} />
        <Route path='partners' component={Partners} />
        <Route path='outreach' component={Outreach} />
        <Route path='people' component={People} />
        <Route path='cooperation' component={Cooperation} />
        <Route path='stakeholders' component={Stakeholders} />
        <Route path='advisoryboard' component={Advisoryboard} />
        <Route path='presentations' component={Presentations} />
        <Route path='videos' component={Videos} />
        <Route path='materials' component={Materials} />
        <Route path='results' component={Results} />
        <Route path='links' component={LinkPage} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
