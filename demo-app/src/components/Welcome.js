import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Container,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

import MainRoute from  '../Routes/MainRoute';

export default function Welcome() {

  return (
    <Router>
      <MainRoute />
    </Router>
  );
}