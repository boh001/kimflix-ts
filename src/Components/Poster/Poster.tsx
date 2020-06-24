import React from "react";
import { PosterFrame, PostrLink } from "./Poster.style";

type PosterType = {
  id: number;
  poster_path: string;
};

const Poster: React.FC<PosterType> = ({ id, poster_path }) => {
  console.log(poster_path);
  console.log("poster");

  return (
    <>
      <PostrLink to={`/detail/${id}`}>
        <PosterFrame src={poster_path} />
      </PostrLink>
    </>
  );
};
export default Poster;
