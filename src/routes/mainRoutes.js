import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: lazy(() =>
      import("../pages/Home" /* webpackChunkName: "home" */)
    ),
  },
  {
    path: "/contacts",
    exact: true,
    name: "Contacts",
    component: lazy(() =>
      import("../pages/Contacts" /* webpackChunkName: "contacts" */)
    ),
  },
  {
    path: "/profile",
    exact: false,
    name: "Profile",
    component: lazy(() =>
      import("../pages/Profile" /* webpackChunkName: "profile" */)
    ),
  },
];
