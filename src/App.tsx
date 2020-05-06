import * as React from 'react';
import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/reset.css';

import '../static/css/slick/slick.css';
//import '../static/css/slick/slick-theme.css';
import ThreatInside from './pages/ThreatInside';

const App = ({ history }: any) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <DefaultLayout path="/ThreatInside" component={ThreatInside} />
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
