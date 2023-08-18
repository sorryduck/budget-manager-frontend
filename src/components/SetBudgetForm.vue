<template>
  <form>
    <input
      v-model="budget"
      type="txt"
      placeholder="Budget"
      class="form-control"
      :class="isDisabled ? 'is-invalid': 'is-valid'"
    />
    <div v-if="isDisabled" class="form-text mt-3 ms-1">Numbers only</div>
    <div class="d-flex justify-content-end">
      <button
        @click="setUserBudget(budget)"
        class="btn btn-primary mb-3 mt-3"
        type="submit"
        :disabled="isDisabled"
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
  watch: {
    budget(budget) {
      if(isNaN(budget) || !budget) {
        this.isDisabled = true
      } else {
        this.isDisabled = false
      }
    }
  }
};
</script>
