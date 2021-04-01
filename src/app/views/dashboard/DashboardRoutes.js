import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Analytics = MatxLoadable({
  loader: () => import("./Analytics")
})
const CreateClient = MatxLoadable({
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
