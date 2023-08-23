import { createStore } from "vuex";
import auth from "./modules/auth";
import api from "./modules/api"

export default createStore({
  modules: {
    auth,
    api
  },
});
