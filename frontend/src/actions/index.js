import * as types from "../constants/types";
import axios from "axios";

export const showAllArticles = (dispatch, state) => {
  dispatch({ type: types.FETCH });
  const API = "http://10.66.192.19:8080/articles";
  axios
    .get(API)
    .then(res => {
      dispatch({
        type: types.SHOW_ALL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: types.FETCH_FAILED
      })
    );
};

export const searchInformation = tagArr => {
  return {
    type: types.SEARCH,
    payload: tagArr
  };
};

export const upVoteArticle = id => {
  return {
    type: types.UPVOTE,
    payload: id
  };
};

export const downVoteArticle = id => {
  return {
    type: types.DOWNVOTE,
    payload: id
  };
};

export const readArticle = id => {
  return {
    type: types.READ,
    payload: id
  };
};
