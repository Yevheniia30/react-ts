import React, { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppBar: FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/">Events</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default AppBar;
