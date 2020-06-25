import styled from "styled-components";
import { color, center } from "Components/variable";

export const Frame = styled.div`
  width: 100%;
  ${center};
`;
export const DetailFrame = styled.div`
  width: 1400px;
  min-height: 100vh;
  font-size: 100px;
  ${center};
  flex-direction: column;
  @media screen and (max-width: 1400px) {
    width: 1200px;
  }
  @media screen and (max-width: 1200px) {
    width: 800px;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const DetailBg = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  object-fit: cover;
  width: 100%;
  height: 700px;
  filter: grayscale(100%);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const DetailImg = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  object-fit: cover;
  width: 300px;
  height: 450px;
  top: -80px;
  left: 50px;
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 500px;
    left: 0;
    top: 0px;
  }
`;
export const DetailInfo = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 20px 80px 0px 400px;
  position: relative;

  @media screen and (max-width: 1200px) {
    font-size: 0.8em;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.5em;
    padding: 500px 50px 0px 50px;
  }
`;
export const DetailMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  font-size: 0.35em;
  font-weight: bold;
`;
export const DetailTitle = styled.div``;

export const DetailDate = styled.div`
  padding: 0px 20px;
`;
export const DetailBtn = styled.div`
  border: 1px solid white;
  font-size: 0.6em;
  width: 100px;
  padding: 25px 10px;
  ${center};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    width: 60px;
    padding: 15px 5px;
  }
  @media screen and (max-width: 478px) {
    width: 20px;
    padding: 10px 5px;
  }
`;
export const DetailSub = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  font-size: 0.2em;
`;
export const DetailVote = styled.div`
  padding: 0px 5px;
`;
export const DetailGenres = styled.div`
  padding: 0px 10px;
`;
export const DetailGenre = styled.span`
  padding-right: 5px;
  ::after {
    content: "|";
    padding-left: 5px;
  }
  :last-child {
    :after {
      content: "";
    }
  }
`;
export const DetailRuntime = styled.div`
  :after {
    content: "분";
  }
`;
export const DetailDes = styled.div`
  width: 100%;
  padding: 10px 0px 20px 0px;
  border-top: 2px solid ${color.red};
`;
export const DetailMainDes = styled.div`
  font-size: 0.2em;
  line-height: 25px;
`;
export const DetailSubDes = styled.div`
  font-size: 0.3em;
  padding: 15px 0px;
`;
export const DetailCasts = styled.div`
  margin-top: 150px;
  padding: 20px 50px;
  width: 100%;
`;
export const DetailCast = styled.div`
  font-size: 0.3em;
  padding: 10px 0px;
  border-bottom: 2px solid ${color.red};
  @media screen and (max-width: 768px) {
    font-size: 0.2em;
  }
`;
export const DetailCasting = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 50px 0px;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 478px) {
    grid-template-columns: minmax(auto, 1fr);
  }
`;
export const DetailWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DetailCastImg = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
export const DetailName = styled.div`
  ${center};
  width: 100%;
  padding: 10px 0px;
  font-size: 0.2em;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.15em;
  }
`;
