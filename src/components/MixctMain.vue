<template>
  <div class="container">
    <div class="container-search" v-show="!props.pageOption.search.hidden">
      <component
        v-for="(item, index) in props.pageOption.search.items"
        :is="componentList[item.name]"
        :key="index"
        :theme="item.theme"
        v-model="dateList[item.theme]"
      />
    </div>
    <div class="container-table" v-show="!props.pageOption.table.hidden">
      <MixctTable :pageOption="props.pageOption" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MixctTable from './MixctTable.vue'
import MixctSelect from './MixctSelect.vue'
import MixctDatePicker from './MixctDatePicker.vue'

const componentList = {
  MixctSelect,
  MixctDatePicker
}

const props = defineProps(['pageOption'])

const dateList = ref({
  picker: [new Date(), new Date()],
  shop: '-1',
  supplier: '-1',
  buyer: '-1',
  issuer: '-1',
  operator: '-1'
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 95%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.container-search {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.container-table {
  margin-top: 10px;
  flex: 1;
}
</style>
