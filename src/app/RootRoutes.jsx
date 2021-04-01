import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";
import quotationsRoutes from "./views/quotations/QuotationsRoutes";
import invoicesRoutes from "./views/invoices/InvoicesRoutes";
import reportsRoutes from "./views/reports/ReportsRoutes";
import administrationsRoutes from "./views/administrations/AdministrationsRoutes";
const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/home" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...quotationsRoutes,
  ...invoicesRoutes,
  ...reportsRoutes,
  ...administrationsRoutes,
  ...redirectRoute,
  ...errorRoute
];

export default routes;
