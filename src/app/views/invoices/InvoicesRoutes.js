import { ReactLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Invoices = ReactLoadable({
  loader: () => import("./Invoices")
})

const invoicesRoutes = [
  {
    path: "/invoices",
    component: Invoices,
    auth: authRoles.admin
  }
];

export default invoicesRoutes;
