import { GET_CATEGORIES } from "../ActionTypes";
import * as api from "../../api/index";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.getCategories();
    console.log(data);

    dispatch({ type: GET_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
