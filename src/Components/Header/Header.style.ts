import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, center } from "Components/variable";

type ScrollProps = {
  scroll: boolean;
};
type SearchProps = {
  search: boolean;
};

export const HeaderFrame = styled.div<ScrollProps>`
  width: 100%;
  height: 65px;
  position: fixed;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5));
  padding: 10px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 100px;
  transition: all ease 0.5s;
  ${(props) => props.scroll && `background-color: ${color.black}`};
  z-index: 99999;
  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;
export const HeaderLinks = styled.div`
  display: grid;
  grid-gap: 15px;

  grid-auto-flow: column;
  @media screen and (max-width: 478px) {
    ${center};
    width: 100%;
    flex-direction: column;
  }
`;
export const HeaderLink = styled(Link)`
  font-size: 0.14em;
  ${center}
`;
export const HeaderLogo = styled(Link)`
  padding-right: 15px;
  color: ${color.red};
  font-size: 0.3em;
  font-weight: bold;
  ${center};
`;
export const HeaderSub = styled.div`
  font-size: 0.17em;
  cursor: pointer;
  display: flex;
  @media screen and (max-width: 478px) {
    display: none;
  }
`;
export const HeaderSearchBar = styled.input.attrs({
  type: "text",
  placeholder: "제목,사람,장르",
})<SearchProps>`
  width: ${(props) => (props.search ? "300px" : "0")};
  height: 35px;
  border: 1px solid ${color.white};
  background-color: ${color.black};
  padding-left: 40px;
  transition: all ease 0.5s;
  opacity: ${(props) => (props.search ? "1" : "0")};
  ::placeholder {
    font-size: 13px;
    color: ${color.grey};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.search ? "100px" : "0")};
    height: 25px;
    padding-left: 25px;
    ::placeholder {
      font-size: 0.1em;
    }
  }
`;
export const HeaderIcon = styled.div`
  position: absolute;
  ${center}
  z-index:999;
  bottom: 8px;
  left: 10px;
  &:scroll {
    transform: scale(1.3);
  }
  @media screen and (max-width: 768px) {
    bottom: 5px;
    left: 8px;
  }
`;
export const HeaderSearch = styled.form`
  display: flex;
  position: relative;
`;
