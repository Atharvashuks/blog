import { FETCH_ALL } from "../ActionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    default:
        return{
            posts
        };
  }
};
