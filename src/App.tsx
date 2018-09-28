import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const app = () => <div>
  <Route path="/" exact={true} component={HomePage} />
  <Route path="/login" exact={true} component={LoginPage} />
</div>;

export default app;
