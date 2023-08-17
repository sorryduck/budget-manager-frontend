<template>
  <div class="container shadow rounded">
    <head-bar :headTitle="'Budget Manager'" />
  </div>

  <div class="container shadow rounded mt-4 p-4">
    <user-data-bar />
  </div>

  <div class="container shadow rounded mt-4 p-4">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: mainComponent === 'TableComponent' }"
          @click="mainComponent = 'TableComponent'"
          aria-current="page"
          href="#"
          >Table</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: mainComponent === 'StatsComponent' }"
          @click="mainComponent = 'StatsComponent'"
          href="#"
          >Stats</a
        >
      </li>
      <!-- <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: mainComponent === 'CategoriesStoreComponent' }"
          @click="mainComponent = 'CategoriesStoreComponent'"
          href="#"
          >Categories & Stores</a
        >
      </li> -->
    </ul>

    <div class="container shadow-sm border">
      <component :is="mainComponent" />
    </div>
  </div>
</template>

<script>
import HeadBar from "@/components/HeadBar";
import ExpensesTable from "@/components/ExpensesTable";
import ExpensesFormsList from "@/components/ExpensesFormsList";
import UserDataBar from "@/components/UserDataBar";

import TableComponent from "@/components/TableComponent";
import StatsComponent from "@/components/StatsComponents";
import CategoriesStoreComponent from "@/components/CategoryStoreComponent"

export default {
  name: "TableView",
  data() {
    return {
      mainComponent: "TableComponent",
    };
  },
  components: {
    HeadBar,
    UserDataBar,
    ExpensesFormsList,
    ExpensesTable,
    TableComponent,
    StatsComponent,
    CategoriesStoreComponent,
  },
};
</script>
