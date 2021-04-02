import { ReactLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Reports = ReactLoadable({
  loader: () => import("./Reports")
})

const reportsRoutes = [
  {
    path: "/reports",
    component: Reports,
    auth: authRoles.admin
  }
];

export default reportsRoutes;
