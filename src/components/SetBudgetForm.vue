<template>
  <form @submit.prevent>
    <input
      v-model="budget"
      type="txt"
      placeholder="Budget"
      class="form-control"
      :class="isNaN(budget) || !budget ? 'is-invalid': 'is-valid'"
    />
    <div v-if="isNaN(budget) || !budget" class="form-text mt-3 ms-1">Numbers only</div>
    <div class="d-flex justify-content-end">
      <button
        @click="setUserBudget(budget)"
        class="btn btn-primary mt-3"
        data-bs-toggle="collapse"
        data-bs-target="#accordionSetBudget"
        type="submit"
        :disabled="isNaN(budget) || !budget"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      budget: "",
      isDisabled: true
    };
  },
  methods: mapActions('api', ['setUserBudget']),
};
</script>
