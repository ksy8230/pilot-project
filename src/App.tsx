import * as React from 'react';
import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/reset.css';

const App = ({ history }: any) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
