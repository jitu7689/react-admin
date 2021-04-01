import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Administrations = MatxLoadable({
  loader: () => import("./Administrations")
})

const administrationsRoutes = [
  {
    path: "/administrations",
    component: Administrations,
    auth: authRoles.admin
  }
];

export default administrationsRoutes;
