import { ReactLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Quotations = ReactLoadable({
  loader: () => import("./Quotations")
})
const CreateQuotation = ReactLoadable({
  loader: () => import("./CreateQuotation")
})
const quotationsRoutes = [
  {
    path: "/quotations",
    component: Quotations,
    auth: authRoles.admin
  },
  {
    path: "/create-quotation",
    component: CreateQuotation,
    auth: authRoles.admin
  }
];

export default quotationsRoutes;
