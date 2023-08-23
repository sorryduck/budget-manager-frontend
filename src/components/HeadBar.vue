<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="row">
        <a class="navbar-brand" href="#"
          >{{ headTitle }}</a
        >
      </div>
      <div class="row">
        <button
          @click="logout"
          class="btn btn-sm btn-outline-secondary"
          type="submit"
          name="logout"
        >
          Log out
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    headTitle: {
      type: String,
    },
  },
  methods: {
    logout() {
      localStorage.setItem("token", "");
      location.reload();
    },
  },
};
</script>
