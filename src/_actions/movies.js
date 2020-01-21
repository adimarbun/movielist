import { GET_MOVIES_POPULAR } from "../config/constant";
import axios from "axios";

export const getPopular = () => {
  return {
    type: GET_MOVIES_POPULAR,
    payload: axios({
      method: "GET",
      url:
        "https://api.themoviedb.org/3/movie/popular?api_key=8f1d4611b0e6ecfdb978fc2bb38c6fc6"
    })
  };
};
