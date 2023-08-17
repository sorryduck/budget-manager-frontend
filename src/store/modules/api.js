import axios from "axios";
import chartCategory from "./charts_configs/chartCategory";
import chartStore from "./charts_configs/chartStore";
import chartExpense from "./charts_configs/chartExpense";

export default {
  namespaced: true,
  state() {
    return {
      tableData: [],
      userData: [],
      chartCategory,
      chartStore,
      chartExpense,
    };
  },
  mutations: {
    mutateUserData(state, userData) {
      state.userData = userData;
    },
    mutateTableData(state, tableData) {
      state.tableData = tableData;
    },
    mutateStatsData(state, data) {
      state.chartCategory.chartOptions.xaxis.categories = data.category_data.categories;
      state.chartCategory.series[0].data = data.category_data.values;

      state.chartStore.chartOptions.xaxis.categories = data.store_data.stores;
      state.chartStore.series[0].data = data.store_data.values;

      state.chartExpense.chartOptions.xaxis.categories = data.expenses_data.titles;
      state.chartExpense.series[0].data = data.expenses_data.values;
    },
  },
  actions: {
    async fetchTableData(context, page) {
      try {
        const response = await axios.get(
          "/api/v1/table-data/",
          {
            params: {
              page: page,
            },
          }
        );

        context.commit("mutateTableData", response?.data);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchUserData(context) {
      try {
        const response = await axios.get(
          "/api/v1/user-data/"
        );

        context.commit("mutateUserData", response?.data);
      } catch (e) {
        console.log(e);
      }
    },
    async addTableItem(context, item) {
      try {
        await axios.post("/api/v1/table-data/", item);

        context.dispatch("fetchTableData");
        context.dispatch("fetchUserData");
      } catch (e) {
        console.log(e);
      }
    },
    async deleteTableItem(context, pk) {
      try {
        await axios.delete("/api/v1/table-data/", {
          data: {
            pk: pk,
          },
        });
        context.dispatch("fetchTableData");
        context.dispatch("fetchUserData");
      } catch (e) {
        console.log(e);
      }
    },
    async updateTableItem(context, item) {
      try {
        await axios.put("/api/v1/table-data/", item);

        context.dispatch("fetchTableData");
        context.dispatch("fetchUserData");
      } catch (e) {
        console.log(e);
      }
    },
    async setUserBudget(context, budget) {
      try {
        await axios.patch("/api/v1/table-data/", {
          budget: budget,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async fetchStatsData(context) {
      try {
        const response = await axios.get(
          "/api/v1/stats-data/"
        );

        context.commit("mutateStatsData", response?.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
