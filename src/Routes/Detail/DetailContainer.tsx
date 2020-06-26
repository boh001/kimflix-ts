import React, { useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useDispatch } from "react-redux";
import { useDidmount } from "hooks/ue";
import { fetchData } from "api";
import { onDetail, onSimilar, onCast } from "modules/reducers/detailData";
import { onLoad } from "modules/reducers/loading";
import url from "constant/url";

export default ({ match }: any) => {
  const {
    params: { id },
  } = match;

  const dispatch = useDispatch();

  useDidmount(() => {
    (async function () {
      try {
        const { data: detail } = await fetchData(`${id}`);
        dispatch(onDetail(detail));

        const {
          data: { results: similar },
        } = await fetchData(`${id}/${url.similar}`);
        dispatch(onSimilar(similar.slice(0, 5)));

        const { data: cast } = await fetchData(`${id}/${url.credits}`);
        dispatch(onCast(cast.cast.slice(0, 6)));

        dispatch(onLoad(false));
      } catch (error) {
        console.log(error);
        console.log("data error");
      }
    })();
    return () => {
      dispatch(onLoad(true));
    };
  });
  return <DetailPresenter />;
};
