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
  <div class="row">
    <div class="col">
      <div class="accordion accordion-flush">
        <div class="accordion-item">
          <div id="accordionSetBudget" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div class="card shadow-sm">
                <div class="card-body">
                  <set-budget-form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SetBudgetForm from "@/components/SetBudgetForm";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    SetBudgetForm,
  },
  computed: mapState("api", ["userData"]),
  methods: mapActions("api", ["fetchUserData"]),
  mounted() {
    this.fetchUserData();
  },
};
</script>
