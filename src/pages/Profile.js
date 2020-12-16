import React, { Suspense } from "react";
import { profileRoutes } from "../routes/profileRoutes";
import { NavLink, Route, Switch } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const Profile = (props) => {
  return (
    <>
      <h2>Profile</h2>
      <ul>
        <Suspense fallback={<Loader />}>
          {profileRoutes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={`${props.match.url}${route.path}`}
                exact={route.exact}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </Suspense>
      </ul>

      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            {profileRoutes.map((route) => (
              <Route
                path={`${props.match.url}${route.path}`}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Profile;
