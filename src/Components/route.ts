import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import MyContents from "../Routes/MyContents";

const route = [
  {
    path: "/",
    page: Home,
    exact: true,
  },
  {
    path: "/detail/:id",
    page: Detail,
    exact: true,
  },
  {
    path: "/myContents",
    page: MyContents,
    exact: true,
  },
];
export default route;
