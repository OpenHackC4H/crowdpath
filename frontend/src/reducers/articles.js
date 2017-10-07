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
    default:
      return state;
  }
}
