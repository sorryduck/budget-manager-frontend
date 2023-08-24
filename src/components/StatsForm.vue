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
            @click="$emit('returnDate', this.startDate, this.endDate)"
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
</template>
<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
    components: {
    flatPickr,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },
}
</script>