<template>
  <form @submit.prevent>
    <div class="row">
      <div class="col">
        <flat-pickr v-model="tableItem.date" type="txt" placeholder="Date" class="form-control mb-4" />
        <input v-model="tableItem.title" type="txt" placeholder="Title" class="form-control mb-4" />
        <input v-model="tableItem.price" type="txt" placeholder="Price" class="form-control" />
      </div>
      <div class="col">
        <input v-model="tableItem.category.title" type="txt" list="categoryOptions" placeholder="Category"
          class="form-control mb-4" />
        <datalist id="categoryOptions">
          <option v-for="item in categories" :value="item.title"></option>
        </datalist>

        <input v-model="tableItem.store.title" type="txt" list="storeOptions" placeholder="Store" class="form-control" />
        <datalist v-if="tableItem.store.title.length > 0" id="storeOptions">
          <option v-for="item in stores" :value="item.title"></option>
        </datalist>

        <div class="d-flex justify-content-end">
          <button @click="$emit('returnValues', tableItem)" class="btn btn-primary my-3" type="submit" :="buttonAttrs">
            Submit
          </button>
        </div>
      </div>
    </div>

  </form>
</template>
<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    flatPickr,
  },
  data() {
    return {
      isDisabled: false,
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
      default: () => { },
    },
  }
};
</script>
