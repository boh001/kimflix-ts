import React from "react";
import InitRouter from "./InitRouter";
import { GlobalStyle } from "./GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <InitRouter />
    </>
  );
};
export default App;
