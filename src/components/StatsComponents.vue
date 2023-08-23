<template>
  <div class="container border rounded my-3 p-3">
    <form @submit.prevent>
      <div class="row">
        <div class="col-sm-5 col-12">
          <flat-pickr
            v-model="startDate"
            type="txt"
            placeholder="From date"
            class="form-control"
          />
        </div>
        <div class="col-sm-5 col-12 mt-2 mt-sm-0">
          <flat-pickr
            v-model="endDate"
            type="txt"
            placeholder="To date"
            class="form-control"
          />
        </div>
        <div class="col-sm-2 col-12 mt-sm-0 mt-2 d-flex flex-column">
          <button
            @click="renderStatsData(this.startDate, this.endDate)"
            class="btn btn-primary"
            type="submit"
            :disabled="!startDate || !endDate"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  <div v-if="dataLoaded" class="container border rounded my-3 p-3">
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
import { mapActions, mapState } from "vuex";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  components: {
    flatPickr,
  },
  data() {
    return {
      dataLoaded: false,
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    ...mapActions("api", ["fetchStatsData"]),
    async renderStatsData(startDate, endDate) {
      this.dataLoaded = false;
      await this.fetchStatsData({startDate, endDate});
      this.dataLoaded = true;
    }
  },
  computed: mapState("api", ["chartCategory", "chartStore", "chartExpense"]),
};
</script>
