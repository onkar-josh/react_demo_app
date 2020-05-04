import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export default function Home() {
    return (
        <div>
          <h2>Welcome to the First Page of the Website</h2>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      );

}