import React from "react";
import {
  ContentsFrame,
  ContentsName,
  ContentsBody,
  Relative,
} from "./Contents.style";
import Poster from "Components/Poster/Poster";
import { Main } from "modules/reducers/mainData";

type ContentsType = {
  content: Main[];
  title: string;
};
export default React.memo<ContentsType>(({ content, title }) => {
  console.log(title);
  return (
    <>
      <Relative>
        <ContentsFrame>
          <ContentsName>{title}</ContentsName>
          <ContentsBody>
            {content.map((c: Main, key: number) => {
              const { poster_path, id } = c;
              return <Poster key={key} id={id} poster_path={poster_path} />;
            })}
          </ContentsBody>
        </ContentsFrame>
      </Relative>
    </>
  );
});
