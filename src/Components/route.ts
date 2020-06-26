import Home from "Routes/Home";
import Detail from "Routes/Detail";
import path from "constant/path";

const route = [
  {
    path: path.home,
    page: Home,
    exact: true,
  },
  {
    path: `${path.detail}/:id`,
    page: Detail,
    exact: true,
  },
];
export default route;
