import { ReactLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Administrations = ReactLoadable({
  loader: () => import("./Administrations")
})
const AddUser = ReactLoadable({
  loader: () => import("./AddUser")
})

const administrationsRoutes = [
  {
    path: "/administrations",
    component: Administrations,
    auth: authRoles.admin
  },
  {
    path: "/add-user",
    component: AddUser,
    auth: authRoles.admin
  }
];

export default administrationsRoutes;
