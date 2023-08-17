<template>
  <div class="container d-flex justify-content-center align-items-xxl-center" style="height: 100vh">
    <div class="row">
      <div class="col-sm-12 col-md-6 mb-5 d-flex align-items-center">
        <p class="fs-1 fw-medium font-monospace">Yet Another Budget Manager</p>
        <img
        src="login-view-image.webp"
        width="200"
        height="200"
      />
      </div>
      <div class="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
        <form @submit.prevent class="">
          <div class="mb-3">
            <label class="form-label">Login</label>
            <input v-model="username" type="text" class="form-control" />
            <div v-if="invalidData" class="form-control">Invalid username</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" />
            <div v-if="invalidData" class="form-control">Invalid password</div>
          </div>
          <div class="d-flex justify-content-between">
            <button
              @click=""
              class="btn btn-outline-primary my-3 disabled"
              type="submit"
              name="signup"
              
            >
              Sign up
            </button>
            <button
              @click="login({ username, password })"
              class="btn btn-outline-primary my-3"
              type="submit"
              name="login"
              
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: mapState("auth", ["invalidData"]),
  methods: mapActions("auth", ["login"]),
};
</script>
