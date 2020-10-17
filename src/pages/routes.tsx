import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { routes, RouteConfig } from './routesConfig';
import Spinner from 'components/spinner/Spinner';
import withLayout from 'components/layout/withLayout';
import LoggedInLayout from 'components/layout/LoggedInLayout/LoggedInLayout';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: RouteConfig, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={withLayout(LoggedInLayout, () => {
              const Component = route.component;
              return (
                <Suspense fallback={<Spinner />}>
                  <Component route={route} />
                </Suspense>
              );
            })}
          />
        ))}
        <Redirect from="/" exact to={routes[0].path} />
        <Route render={() => <>404</>} />
      </Switch>
    </Router>
  );
};

export default Routes;
