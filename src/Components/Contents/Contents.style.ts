import styled from "styled-components";
import { color, center } from "Components/variable";

export const ContentsFrame = styled.div`
  width: 1400px;
  padding: 0px 45px;
  padding-bottom: 20px;
  ${center};
  font-size: 100px;
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
export const ContentsName = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 40px 0px;
  align-items: center;
  font-size: 0.35em;
  font-weight: bold;
  border-bottom: 2px solid ${color.red};
  @media screen and (max-width: 768px) {
    font-size: 0.25em;
  }
  @media screen and (max-width: 478px) {
    font-size: 0.2em;
  }
`;
export const ContentsBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 300px);
  padding: 40px 0px;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 200px);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, auto));
  }
  @media screen and (max-width: 478px) {
    grid-template-columns: auto;
  }
`;
export const Relative = styled.div`
  width: 100%;

  position: relative;
  ${center};
  flex-direction: column;
`;
