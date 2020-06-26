import React from "react";
import Detail from "Components/Detail/Detail";
import { useSelector } from "react-redux";
import { RootState } from "modules/reducers/root";
import Loading from "Components/Loading/Loading";

export default () => {
  const { loading } = useSelector((state: RootState) => state.loading);
  return <>{loading ? <Loading /> : <Detail />}</>;
};
