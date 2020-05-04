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

import Home from  '../container/Homepage';
import Login from  './Login';
import ListOfUsers from './ListOfUsers';
import Rewards from './Rewards';

export default function MainRoute() {
    return (
        <div>
        <Switch /*location={background || location}*/>
          <Route exact path="/" children={<Home/>} />
          <Route path="/login" children={<Login />} />
          <Route path="/listOfUsers" children={<ListOfUsers />} />
          <Route path="/Rewards" children={<Rewards />} />
        </Switch>
        {/* Show the modal when a background page is set */}
        {/*background && <Route path="/img/:id" children={<Modal />} />*/}
      </div>
    );
  }