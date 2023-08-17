<template>
  <expenses-forms-list
    :categories="tableData.categories"
    :stores="tableData.stores"
  />
  <expenses-table :tableContent="tableData.content" />

  <div class="btn-group pb-3 d-flex justify-content-center" role="group">
    <button
      :disabled="page === 1"
      @click="--page"
      type="button"
      class="btn btn-outline-primary"
    >
      Previous
    </button>
    <button disabled type="button" class="btn btn-outline-primary">
      {{ page }} of {{ tableData?.pages }}
    </button>
    <button
      :disabled="page === tableData?.pages"
      @click="++page"
      type="button"
      class="btn btn-outline-primary"
    >
      Next
    </button>
  </div>
</template>
<script>
import ExpensesTable from "@/components/ExpensesTable";
import ExpensesFormsList from "@/components/ExpensesFormsList";
import { mapState, mapActions } from "vuex";

export default {
  name: "TableComponent",
  components: {
    ExpensesFormsList,
    ExpensesTable,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: mapActions("api", ["fetchTableData"]),
  computed: mapState("api", ["tableData"]),
  watch: {
    page(){
      this.fetchTableData(this.page)
    }
  },
  mounted() {
    this.fetchTableData(this.page)
  }
};
</script>
