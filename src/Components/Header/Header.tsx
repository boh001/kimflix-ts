import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "modules/reducers/root";
import { wheelScroll, clickSearch } from "./Header.fns";
import {
  HeaderFrame,
  HeaderLogo,
  HeaderLinks,
  HeaderLink,
  HeaderSub,
  HeaderSearch,
  HeaderSearchBar,
  HeaderIcon,
} from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const { scroll, search } = useSelector((state: RootState) => state.header);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <HeaderFrame scroll={scroll}>
      <HeaderLinks>
        <HeaderLogo to="/">KIMFLIX</HeaderLogo>
        <HeaderLink to="/">홈</HeaderLink>
        <HeaderLink to="/myContents">내가 찜한 콘텐츠</HeaderLink>
      </HeaderLinks>
      <HeaderSub>
        <HeaderSearch>
          <HeaderIcon onClick={clickSearch} ref={inputRef}>
            <FontAwesomeIcon icon={faSearch} />
          </HeaderIcon>
          <HeaderSearchBar search={search} />
        </HeaderSearch>
      </HeaderSub>
    </HeaderFrame>
  );
};
export default Header;
