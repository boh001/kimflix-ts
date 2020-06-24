import React from "react";
import HomePresenter from "./HomePresenter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/reducers/root";
import { useDidmount } from "hooks/ue";
import { fetchData } from "api";
import { onNowPlaying, onUpcoming, onPopular } from "modules/reducers/mainData";
import { onLoad } from "modules/reducers/loading";

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { nowPlaying, upcoming, popular } = useSelector(
    (state: RootState) => state.mainData
  );
  const { loading } = useSelector((state: RootState) => state.loading);

  useDidmount(() => {
    (async function () {
      try {
        const {
          data: { results: nowPlaying },
        } = await fetchData("now_playing");
        dispatch(onNowPlaying(nowPlaying));

        const {
          data: { results: upcoming },
        } = await fetchData("upcoming");
        dispatch(onUpcoming(upcoming));

        const {
          data: { results: popular },
        } = await fetchData("popular");
        dispatch(onPopular(popular));

        dispatch(onLoad(false));
      } catch (error) {
        console.log(error);
        console.log("data error");
      }
      return () => dispatch(onLoad(true));
    })();
  });
  return (
    <HomePresenter
      loading={loading}
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
    />
  );
};
export default HomeContainer;
