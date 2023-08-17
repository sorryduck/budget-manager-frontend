<template>
  <router-view />
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters("auth", ['getIsAuthenticated', 'getToken']),
  created() {
    const token = this.getToken;
    axios.defaults.headers.common["Authorization"] = token
      ? "Token " + token
      : "";
      
    this.$router.push(this.getIsAuthenticated ? "" : "/login");
  },
};
</script>
