import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'routes';
import Loading from 'components/Loading';
import Header from 'components/Header';

export default () => (
  <Suspense fallback={<Loading />}>
    <Header />
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} component={route.component} />
      ))}
    </Switch>
  </Suspense>
);
