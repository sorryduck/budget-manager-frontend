import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueApexCharts from "vue3-apexcharts";

axios.defaults.baseURL = "https://sorryduck.pythonanywhere.com/"

createApp(App).use(store, axios).use(router).use(VueApexCharts).mount("#app");
