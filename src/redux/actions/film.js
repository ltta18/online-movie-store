import FilmTypes from "../types/FilmTypes";
import { DOMAIN, API_KEY } from "../../../config.json";
import { postApi } from "./util";

const movieUrl = (route, id = null) =>
  `${DOMAIN}/movie/${route}${
    id ? `/${id}` : ""
  }?api_key=${API_KEY}&language=en-US`;

export function fetchNowPlaying() {
  return {
    types: FilmTypes.FETCH_NOW_PLAYING,
    callAPI: () => postApi(movieUrl("now_playing")),
    payload: {},
  };
}

export function fetchPopular() {
  return {
    types: FilmTypes.FETCH_POPULAR,
    callAPI: () => postApi(movieUrl("popular")),
    payload: {},
  };
}

export function fetchTopRated() {
  return {
    types: FilmTypes.FETCH_TOP_RATED,
    callAPI: () => postApi(movieUrl("top_rated")),
    payload: {},
  };
}

export function fetchRecommendation(id) {
  return {
    types: FilmTypes.FETCH_POPULAR,
    callAPI: () => postApi(movieUrl("recommendations", id)),
    payload: {},
  };
}

export function fetchDetail(id) {
  return {
    types: FilmTypes.FETCH_DETAIL,
    callAPI: () => postApi(movieUrl(id)),
    payload: {},
  };
}