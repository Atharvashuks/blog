import axios from "axios";

import { baseURL } from "../Utils/baseURL";

const API = axios.create({ baseURL: baseURL });

export const fetchPosts = () => API.get("/server/posts");
