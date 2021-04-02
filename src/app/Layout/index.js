import {ReactLoadable} from "matx";

const Layout1 = ReactLoadable({
  loader: () => import("./Layout1/Layout1")
});

export const Layouts = {
  layout1: Layout1
}