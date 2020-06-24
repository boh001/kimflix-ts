import styled from "styled-components";
import { center } from "Components/variable";
import { Link } from "react-router-dom";
export const PostrLink = styled(Link)`
  width: 100%;
  height: 100%;
`;
export const PosterFrame = styled.img.attrs((props) => ({
  src: `https://image.tmdb.org/t/p/w300${props.src}`,
}))`
  ${center};
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
