import { createStore } from "vuex";
import auth from "./modules/auth";
import api from "./modules/api"
// import axios from "axios";

// const apiClient = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': '',
//   },
// });

export default createStore({
  modules: {
    auth,
    api
  },
});
