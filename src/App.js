import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import PlaIndex from './components/pla-index';
import PlaLogin from './components/user-login';
import NewExperiment from './components/new-experiment';
import NewComponent from './components/new-component';
import NewAttribute from './components/new-attribute';
import ExperDetails from './components/exper-details';
import WorkStation from './components/work-station';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={PlaLogin}></Route>
          <Route path="/index" component={PlaIndex}></Route>
          <Route path="/experdetails/:id" component={ExperDetails}></Route>
          <Route path="/experimentnew" component={NewExperiment}></Route>
          <Route path="/componentnew" component={NewComponent}></Route>
          <Route path="/attributenew" component={NewAttribute}></Route>
          <Route path="/workstation" component={WorkStation}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
