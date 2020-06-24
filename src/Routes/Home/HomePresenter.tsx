import React from "react";
import LazyLoad from "react-lazyload";
import Loading from "Components/Loading/Loading";
import TodayM from "Components/TodayM/TodayM";
import { Main } from "modules/reducers/mainData";
import Contents from "Components/Contents/Contents";

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
          <Contents title={"현재 상영작"} content={nowPlaying} />
          <LazyLoad height={100}>
            <Contents title={"상영 예정작"} content={upcoming} />
          </LazyLoad>
          <LazyLoad height={100}>
            <Contents title={"인기 상영작"} content={popular} />
          </LazyLoad>
        </>
      )}
    </>
  );
};
export default HomePresenter;
