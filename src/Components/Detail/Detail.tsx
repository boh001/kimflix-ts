import React, { useCallback, useState } from "react";
import {
  DetailFrame,
  DetailBg,
  DetailInfo,
  DetailImg,
  DetailTitle,
  DetailSub,
  DetailDes,
  DetailMain,
  DetailDate,
  DetailBtn,
  DetailVote,
  DetailGenres,
  DetailGenre,
  DetailRuntime,
  DetailMainDes,
  DetailSubDes,
  DetailCasts,
  DetailCast,
  DetailCasting,
  DetailCastImg,
  DetailName,
  DetailWrap,
  Frame,
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Loading from "Components/Loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "modules/reducers/root";

export default () => {
  const [update, setUpdate] = useState(false);
  const { loading } = useSelector((state: RootState) => state.loading);
  console.log(loading);

  const { detail, similar, cast } = useSelector(
    (state: RootState) => state.detailData
  );
  const {
    id,
    poster_path,
    backdrop_path,
    overview,
    tagline,
    genres,
    runtime,
    title,
    vote_average,
    release_date,
  } = detail;
  const like = localStorage.getItem(`${id}`);
  const addList = useCallback((e) => {
    e.preventDefault();
    if (like) {
      localStorage.removeItem(`${id}`);
    } else {
      localStorage.setItem(
        `${id}`,
        JSON.stringify({
          id: id,
          title: title,
          backdrop_path: backdrop_path,
        })
      );
    }
    setUpdate(!update);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailBg src={backdrop_path} />
          <Frame>
            <DetailFrame>
              <DetailInfo>
                <DetailImg src={poster_path} />
                <DetailMain>
                  <DetailTitle>{title}</DetailTitle>
                  <DetailDate>({release_date.slice(0, 4)})</DetailDate>
                  <DetailBtn onClick={(e) => addList(e)}>
                    {!like ? "찜하기" : "MY"}
                  </DetailBtn>
                </DetailMain>
                <DetailSub>
                  <FontAwesomeIcon icon={faStar} />
                  <DetailVote>{vote_average}</DetailVote>
                  <DetailGenres>
                    {genres &&
                      genres.map((g, key) => {
                        const { name } = g;
                        return <DetailGenre key={key}>{name}</DetailGenre>;
                      })}
                  </DetailGenres>
                  <DetailRuntime>{runtime}</DetailRuntime>
                </DetailSub>
                <DetailDes>
                  <DetailSubDes>{tagline}</DetailSubDes>
                  <DetailMainDes>{overview}</DetailMainDes>
                </DetailDes>
              </DetailInfo>
              <DetailCasts>
                <DetailCast>출연진</DetailCast>
                <DetailCasting>
                  {cast.map((c, key) => {
                    const { character, name, profile_path } = c;
                    return (
                      <DetailWrap key={key}>
                        <DetailCastImg src={profile_path} />
                        <DetailName>{name}</DetailName>
                        <DetailName>{character}</DetailName>
                      </DetailWrap>
                    );
                  })}
                </DetailCasting>
              </DetailCasts>
              <DetailCasts>
                <DetailCast>비슷한 콘텐츠</DetailCast>
                <DetailCasting>
                  {similar.map((s, key) => {
                    const { poster_path, vote_average, title } = s;
                    return (
                      <DetailWrap key={key}>
                        <DetailCastImg src={poster_path} />
                        <DetailName>{title}</DetailName>
                        <DetailName>
                          <FontAwesomeIcon icon={faStar} />
                          {vote_average}
                        </DetailName>
                      </DetailWrap>
                    );
                  })}
                </DetailCasting>
              </DetailCasts>
            </DetailFrame>
          </Frame>
        </>
      )}
    </>
  );
};
