import { ReactLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Invoices = ReactLoadable({
  loader: () => import("./Invoices")
})
const CreateInvoice = ReactLoadable({
  loader: () => import("./CreateInvoice")
})
const invoicesRoutes = [
  {
    path: "/invoices",
    component: Invoices,
    auth: authRoles.admin
  },
  {
    path: "/create-invoice",
    component: CreateInvoice,
    auth: authRoles.admin
  }
];

export default invoicesRoutes;
