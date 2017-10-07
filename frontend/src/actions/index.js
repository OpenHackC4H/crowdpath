import * as types from "../constants/types";

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


