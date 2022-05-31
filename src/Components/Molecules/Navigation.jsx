import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to='/Login'><p>Login</p></NavLink>
      <NavLink to='/Welcome'><p>Welcome</p></NavLink>
    </div>
  );
}