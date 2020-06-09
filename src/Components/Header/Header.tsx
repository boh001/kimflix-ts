import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules/reducers/root";
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
import { onScroll, onSearch } from "modules/reducers/header";
import { useCallDispatch } from "hooks/ucb";
import { useDidmount } from "hooks/ue";

const Header: React.FC = () => {
  const { scroll, search } = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useDidmount(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        dispatch(onScroll(true));
      } else {
        dispatch(onScroll(false));
      }
    });
    return window.removeEventListener("scroll", () => console.log("remove"));
  });
  return (
    <HeaderFrame scroll={scroll}>
      <HeaderLinks>
        <HeaderLogo to="/">KIMFLIX</HeaderLogo>
        <HeaderLink to="/">홈</HeaderLink>
        <HeaderLink to="/myContents">내가 찜한 콘텐츠</HeaderLink>
      </HeaderLinks>
      <HeaderSub>
        <HeaderSearch>
          <HeaderIcon
            onClick={useCallDispatch(onSearch(!search))}
            ref={inputRef}
          >
            <FontAwesomeIcon icon={faSearch} />
          </HeaderIcon>
          <HeaderSearchBar search={search} />
        </HeaderSearch>
      </HeaderSub>
    </HeaderFrame>
  );
};
export default Header;
