import Home from "Routes/Home";
import Detail from "Routes/Detail";
import MyContents from "Routes/MyContents";
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
  {
    path: path.myContents,
    page: MyContents,
    exact: true,
  },
];
export default route;
