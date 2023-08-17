<template>
  <div class="row">
    <div class="col">
      <span class="fs-2">Hello, {{ userData?.username }}!</span>
    </div>

    <div class="col text-end">
      <a
        class="fs-4 text-break badge bg-primary btn btn-primary"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#accordionSetBudget"
        >{{ userData?.budget }}</a
      >
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState("api", ["userData"]),
  methods: mapActions("api", ["fetchUserData"]),
  mounted() {
    this.fetchUserData()
  }
};
</script>
