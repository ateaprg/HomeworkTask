import React from 'react';
import { Route, Switch } from 'react-router-dom';

import campaigns from './Pages/Campaigns';

const Routes = () => (
  <Switch >
    <Route path={'/'} component={campaigns} />
    <Route component={() => <h1>Not Found</h1>}/>
  </Switch>
)

export default Routes