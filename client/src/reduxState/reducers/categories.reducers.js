import { GET_CATEGORIES } from "../ActionTypes";

export default (categories = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return {
        categories,
      };
  }
};
