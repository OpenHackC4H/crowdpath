import * as types from "../constants/types";
import axios from "axios";

const API = "http://10.66.192.19:8080/articles";
const config = {
  headers: { "X-Requested-With": "XMLHttpRequest" }
};

export const showAllArticles = (dispatch, state, id) => {
  dispatch({ type: types.FETCH });
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

export const updateAllVotes = id => {
  return function(dispatch) {
    dispatch({ type: types.FETCH });
    axios
      .get(API + `/${id}`)
      .then(res => {
        dispatch({
          type: types.UPDATE_VOTES,
          payload: res.data,
          id: id
        });
      })
      .catch(err => dispatch({ type: types.FETCH_FAILED }));
  };
};

export const upVoteArticle = (id, upVotes) => {
  return function(dispatch) {
    axios
      .patch(
        API + `/${id}`,
        {
          upVotes: upVotes + 1
        },
        config
      )
      .then(() => {
        axios.get(API + `/${id}`).then(res => {
          dispatch({
            type: types.UPDATE_VOTES,
            payload: res.data,
            id: id
          });
        });
      });
  };
};

export const downVoteArticle = (id, downVotes) => {
  return function(dispatch) {
    axios
      .patch(
        API + `/${id}`,
        {
          downVotes: downVotes + 1
        },
        config
      )
      .then(() => {
        axios.get(API + `/${id}`).then(res => {
          dispatch({
            type: types.UPDATE_VOTES,
            payload: res.data,
            id: id
          });
        });
      });
  };
};

export const readArticle = id => {
  return {
    type: types.READ,
    payload: id
  };
};

export const addTags = tagArr => {
  return {
    type: types.SEARCH,
    payload: tagArr
  };
};
