import React, { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Frame,
  Content,
  ContentInfo,
  ContentName,
  ContentRank,
  ContentDes,
  ContentLinks,
  ContentSub,
  ContentControl,
  ContentOld,
  Old,
  Ptage,
  BtnLink,
} from "./TodayM.style";
import { RootState } from "modules/reducers/root";
import { onPlay, onSound, onEnd } from "modules/reducers/video";
import { useDidmount } from "hooks/ue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVolumeMute,
  faVolumeUp,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const TodayM: React.FC = () => {
  const dispatch = useDispatch();
  const { sound, end, play } = useSelector((state: RootState) => state.video);

  const playRef = useRef<HTMLVideoElement>(null);

  const replay = useCallback((e) => {
    e.preventDefault();
    if (playRef.current) {
      playRef.current.play();
    }
    dispatch(onEnd(false));
  }, []);
  const turnUp = useCallback((e) => {
    e.preventDefault();
    dispatch(onSound(!sound));
  }, []);

  useDidmount(() => {
    setTimeout(() => {
      if (playRef.current) {
        if (!play) {
          playRef.current.play();
        }
        playRef.current.onended = () => dispatch(onEnd(true));
        dispatch(onPlay(true));
      }
    }, 3000);
    return () => {
      clearTimeout();
      dispatch(onEnd(false));
      dispatch(onPlay(false));
    };
  });

  return (
    <Frame>
      <Content ref={playRef} sound={sound} />
      <ContentInfo>
        <ContentName>한라산 위의 친구들</ContentName>
        <ContentRank>오늘 영화 순위 4위</ContentRank>
        <ContentDes>
          먼 서울에서 비행기를 타고 온 서울과학기술대학교 학생 4명, 27살이 된
          지금 이 동영상을 보고 있다.
        </ContentDes>
        <ContentLinks>
          <BtnLink to="#">
            <FontAwesomeIcon icon={faPlay} />
            <span>재생</span>
          </BtnLink>
          <BtnLink to="#">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>상세정보</span>
          </BtnLink>
        </ContentLinks>
      </ContentInfo>
      <ContentSub>
        {!end ? (
          <ContentControl play={play} onClick={(e) => turnUp(e)}>
            <FontAwesomeIcon icon={sound ? faVolumeUp : faVolumeMute} />
          </ContentControl>
        ) : (
          <ContentControl play={play} onClick={(e) => replay(e)}>
            <FontAwesomeIcon icon={faRedo} />
          </ContentControl>
        )}
        <ContentOld>
          <Old>
            <Ptage>전제 관람가</Ptage>
          </Old>
        </ContentOld>
      </ContentSub>
    </Frame>
  );
};
export default TodayM;
