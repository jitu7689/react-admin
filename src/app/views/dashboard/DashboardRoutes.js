import { ReactLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Analytics = ReactLoadable({
  loader: () => import("./Analytics")
})
const CreateClient = ReactLoadable({
  loader: () => import("./CreateClient")
})

const dashboardRoutes = [
  {
    path: "/dashboard/home",
    component: Analytics,
    auth: authRoles.admin
  },
  {
    path: "/create-client",
    component: CreateClient,
    auth: authRoles.admin
  }
];

export default dashboardRoutes;
