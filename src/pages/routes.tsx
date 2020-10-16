import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { routes, RouteConfig } from './routesConfig';
import Spinner from 'components/spinner/Spinner';

const Routes: React.FC = () => {
  return (
    <Router>
      <Link to="create-tour">1</Link>
      <Link to="manage-tour">2</Link>
      <Link to="manage-profile">3</Link>
      <Switch>
        {routes.map((route: RouteConfig, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={() => {
              const Component = route.component;
              return (
                <Suspense fallback={<Spinner />}>
                  <Component route={route} />
                </Suspense>
              );
            }}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
