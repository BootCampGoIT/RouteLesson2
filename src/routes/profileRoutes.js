import { lazy } from "react";

export const profileRoutes = [
  {
    path: "/cast",
    exact: true,
    name: "Cast",
    component: lazy(() =>
      import("../Components/profile/Cast" /* webpackChunkName: "Cast" */)
    ),
  },
  {
    path: "/reviews",
    exact: true,
    name: "Reviews",
    component: lazy(() =>
      import("../Components/profile/Reviews" /* webpackChunkName: "Reviews" */)
    ),
  },
];
