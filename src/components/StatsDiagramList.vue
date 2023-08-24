<template>
  <div v-if="isDataLoaded" class="container border rounded my-3 p-3">
    <div class="accordion accordion-flush" id="accordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Expenses per category
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div class="accordion-body p-0">
            <apexchart
              type="bar"
              height="350"
              :options="chartCategory.chartOptions"
              :series="chartCategory.series"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Expenses per store
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div class="accordion-body p-0">
            <apexchart
              type="bar"
              height="350"
              :options="chartStore.chartOptions"
              :series="chartStore.series"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Expenses per product
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div class="accordion-body p-0">
            <apexchart
              type="bar"
              height="350"
              :options="chartExpense.chartOptions"
              :series="chartExpense.series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    isDataLoaded: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: mapState("api", ["chartCategory", "chartStore", "chartExpense"]),
};
</script>
