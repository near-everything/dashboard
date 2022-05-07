import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Collect = lazy(() => import("../pages/Collect"));
const Organize = lazy(() => import("../pages/Organize"));
const Item = lazy(() => import("../pages/Item"));
const Request = lazy(() => import("../pages/Request"));
const Invite = lazy(() => import("../pages/Invite"));
const Page404 = lazy(() => import("../pages/404"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/collect",
    component: Collect,
  },
  {
    path: "/organize",
    component: Organize,
  },
  {
    path: "organize/item/:itemId",
    component: Item,
  },
  {
    path: "/request",
    component: Request,
  },
  {
    path: "/invite",
    component: Invite,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
