import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
      isAuthenticated: localStorage.getItem("token") ? true : false,
      invalidData: '',
    };
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getToken(state) {
      return state.token;
    }
  },
  mutations: {
    mutateInvalidData(state) {
      state.invalidData = 'is-invalid'
    }
  },
  actions: {
    async login(context, {username, password}) {
      try {
        const response = await axios.post(
          "/api-token-auth/",
          {
            username: username,
            password: password,
          }
        );

        localStorage.setItem("token", response.data?.token);
        location.reload();
      } catch (e) {
        await context.commit('mutateInvalidData')
        console.log(e);
      }
    }, 
  }
};
