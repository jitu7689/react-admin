import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Quotations = MatxLoadable({
  loader: () => import("./Quotations")
})

const quotationsRoutes = [
  {
    path: "/quotations",
    component: Quotations,
    auth: authRoles.admin
  }
];

export default quotationsRoutes;
