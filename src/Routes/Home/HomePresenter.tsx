import React from "react";
import LazyLoad from "react-lazyload";
import Loading from "Components/Loading/Loading";
import TodayM from "Components/TodayM/TodayM";
import { Main } from "modules/reducers/data";
type Props = {
  loading: Boolean;
  nowPlaying: Main[];
  upcoming: Main[];
  popular: Main[];
};

const HomePresenter: React.FC<Props> = ({
  loading,
  nowPlaying,
  upcoming,
  popular,
}) => {
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
export default HomePresenter;
