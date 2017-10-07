import * as types from "../constants/types";

export default function reduceArticles(
  state = { articles: [], tags: [], fetchStatus: "None" },
  action
) {
  switch (action.type) {
    case types.SHOW_ALL:
      return {
        ...state,
        fetchStatus: "success",
        articles: action.payload
      };
    case types.FETCH:
      return {
        ...state,
        fetchStatus: "fetching"
      };
    case types.UPDATE_VOTES:
      return {
        ...state,
        articles: state.articles.map(
          article => (article.id === action.id ? action.payload : article)
        )
      };

    default:
      return state;
  }
}
