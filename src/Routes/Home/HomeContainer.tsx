import React from "react";
import HomePresenter from "./HomePresenter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/reducers/root";
import { useDidmount } from "hooks/ue";
import { fetchData } from "api";
import { onData } from "modules/reducers/data";
import { onLoad } from "modules/reducers/loading";

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    main: { nowPlaying, upcoming, latest, popular },
  } = useSelector((state: RootState) => state.data);
  const { loading } = useSelector((state: RootState) => state.loading);

  useDidmount(() => {
    (async function () {
      try {
        const {
          data: { results: nowPlaying },
        } = await fetchData("now_playing");
        const {
          data: { results: upcoming },
        } = await fetchData("upcoming");
        const {
          data: { results: popular },
        } = await fetchData("popular");
        const data = {
          nowPlaying,
          upcoming,
          popular,
        };
        dispatch(onData(data));
        dispatch(onLoad(false));
      } catch (error) {
        console.log(error);
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
