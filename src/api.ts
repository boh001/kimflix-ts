import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

type Option = {
  params: {
    api_key: any;
    language: string;
  };
};

const option: Option = {
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko-KR",
  },
};

const api = () =>
  axios.create({ baseURL: "https://api.themoviedb.org/3/movie/" });

export const fetchData = (loc: string) => {
  return api().get(`${loc}`, option);
};
