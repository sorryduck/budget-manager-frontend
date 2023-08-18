<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col mb-4">
        <flat-pickr
          v-model="tableItem.date"
          type="date"
          placeholder="Date"
          class="form-control mb-4"
          :class="tableItem.date ? 'is-valid': 'is-invalid'"
        />
        <input
          v-model="tableItem.title"
          type="txt"
          placeholder="Title"
          class="form-control mb-4"
          :class="tableItem.title ? 'is-valid': 'is-invalid'"
        />
        <input
          v-model="tableItem.price"
          type="txt"
          placeholder="Price"
          class="form-control"
          :class="tableItem.price && !isNaN(tableItem.price) ? 'is-valid': 'is-invalid'"
        />
      </div>
      <div class="col">
        <input
          v-model="tableItem.category.title"
          type="txt"
          list="categoryOptions"
          placeholder="Category"
          class="form-control mb-4"
          :class="tableItem.category.title ? 'is-valid': 'is-invalid'"
        />
        <datalist id="categoryOptions">
          <option v-for="item in categories" :value="item.title"></option>
        </datalist>

        <input
          v-model="tableItem.store.title"
          type="txt"
          list="storeOptions"
          placeholder="Store"
          class="form-control"
          :class="tableItem.store.title ? 'is-valid': 'is-invalid'"
        />
        <datalist id="storeOptions">
          <option v-for="item in stores" :value="item.title"></option>
        </datalist>

        <div class="d-flex justify-content-end">
          <button
            @click="$emit('returnValues', tableItem)"
            class="btn btn-primary mt-4"
            type="submit"
            :="buttonAttrs"
            :disabled="isDisabled"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
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
      isDisabled: true,
    };
  },
  props: {
    categories: {
      type: Array,
    },
    stores: {
      type: Array,
    },
    tableItem: {
      type: Object,
      required: true,
    },
    buttonAttrs: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  watch: {
    tableItem: {
      handler(item) {
        this.isDisabled =
          isNaN(item?.price) ||
          !item?.price ||
          !item?.category?.title ||
          !item?.store?.title ||
          !item?.date ||
          !item?.title
            ? true
            : false;
      },
      deep: true,
    },
  },
};
</script>
