<template>
  <div class="modal fade" id="modalModify" data-bs-keyboard="false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <basic-form-table-item
            :tableItem="modItem"
            @returnValues="updateTableItem"
            :buttonAttrs="{ 'data-bs-dismiss': 'modal' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicFormTableItem from "@/components/BasicFormTableItem";
import { mapActions } from "vuex";

export default {
  components: {
    BasicFormTableItem,
  },
  props: {
    modItem: {
      type: Object,
    },
  },
  methods: mapActions('api', ['updateTableItem']),
};
</script>
