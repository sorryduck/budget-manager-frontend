<template>
  <div class="accordion accordion-flush">
    <div class="accordion-item">
      <div id="accordionInputItem" class="accordion-collapse collapse">
        <div class="accordion-body">
          <div class="card shadow-sm">
            <div class="card-body">
              <basic-form-table-item
                :categories="categories"
                :stores="stores"
                :tableItem="tableItem"
                @returnValues="addItem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</template>
<script>
import BasicFormTableItem from "@/components/BasicFormTableItem";
import SetBudgetForm from "@/components/SetBudgetForm";
import { mapActions } from "vuex";

export default {
  components: {
    BasicFormTableItem,
    SetBudgetForm,
  },
  data() {
    return {
      tableItem: {
        title: "",
        category: {
          title: "",
        },
        price: "",
        store: {
          title: "",
        },
      },
    };
  },
  props: {
    categories: {
      type: Array,
    },
    stores: {
      type: Array,
    },
  },
  methods: {
    ...mapActions("api", ["addTableItem"]),
    addItem(item) {
      this.addTableItem(item);

      this.tableItem = {
        title: "",
        category: {
          title: "",
        },
        price: "",
        store: {
          title: "",
        },
      };
    },
  },
};
</script>
