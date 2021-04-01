import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Reports = MatxLoadable({
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
