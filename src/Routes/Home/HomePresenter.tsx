import React from "react";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import Loading from "Components/Loading/Loading";
import TodayM from "Components/TodayM/TodayM";
import { RootState } from "modules/reducers/root";

export default () => {
  const { loading } = useSelector((state: RootState) => state.loading);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TodayM />
        </>
      )}
    </>
  );
};
