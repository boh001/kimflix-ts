import React, { useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useDispatch } from "react-redux";
import { useDidmount } from "hooks/ue";
import { fetchData } from "api";
import { onDetail, onSimilar, onCast } from "modules/reducers/detailData";
import { onLoad } from "modules/reducers/loading";

export default ({ match }: any) => {
  const {
    params: { id },
  } = match;

  const dispatch = useDispatch();

  useDidmount(() => {
    (async function () {
      try {
        const {
          data: { results: nowPlaying },
        } = await fetchData(`${id}`);
        dispatch(onDetail(nowPlaying));

        const {
          data: { results: upcoming },
        } = await fetchData(`${id}/similar`);
        dispatch(onSimilar(upcoming));

        const {
          data: { results: popular },
        } = await fetchData(`${id}/credits`);
        dispatch(onCast(popular));

        dispatch(onLoad(false));
      } catch (error) {
        console.log(error);
        console.log("data error");
      }
      return () => dispatch(onLoad(true));
    })();
  });
  return <DetailPresenter />;
};
