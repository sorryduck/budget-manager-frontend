<template>
  <div class="container py-4">
    <apexchart
      v-if="dataLoaded"
      type="bar"
      height="350"
      :options="chartCategory.chartOptions"
      :series="chartCategory.series"
    ></apexchart>
  </div>
  <div class="container py-4">
    <apexchart
      v-if="dataLoaded"
      type="bar"
      height="350"
      :options="chartStore.chartOptions"
      :series="chartStore.series"
    ></apexchart>
  </div>
  <div class="container py-4">
    <apexchart
      v-if="dataLoaded"
      type="bar"
      height="350"
      :options="chartExpense.chartOptions"
      :series="chartExpense.series"
    ></apexchart>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      dataLoaded: false,
    };
  },
  methods: mapActions("api", ["fetchStatsData"]),
  async created() {
    await this.fetchStatsData();
    this.dataLoaded = true;
  },
  computed: mapState("api", ["chartCategory", "chartStore", "chartExpense"]),
};
</script>
