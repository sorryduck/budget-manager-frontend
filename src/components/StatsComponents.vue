<template>
  <stats-form @returnDate="renderStatsData"/>
  <stats-diagram-list :isDataLoaded="dataLoaded"/>
</template>

<script>
import { mapActions} from "vuex";
import StatsForm from "./StatsForm.vue";
import StatsDiagramList from "./StatsDiagramList.vue";

export default {
  components: {
    StatsForm,
    StatsDiagramList
  },
  data() {
    return {
      dataLoaded: false,
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
};
</script>
