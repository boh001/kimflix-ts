import React from "react";
import { MainFrame } from "./Layout.style";

const Layout: React.FC = ({ children }) => {
  return <MainFrame>{children}</MainFrame>;
};
export default Layout;
