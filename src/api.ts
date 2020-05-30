import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

type Option = {
  baseUrl: string;
  params: {
    api_key: any;
    language: string;
  };
};

const option: Option = {
  baseUrl: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko-KR",
  },
};

const api = () => axios.create(option);

export const fetchData = (id: number | null, loc: string) =>
  api().get(`${id}/${loc}`);
