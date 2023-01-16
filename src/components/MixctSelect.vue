<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options[props.theme]"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps(['theme', 'modelValue'])
const value = ref('-1')

const options = {
  shop: [
    {
      label: '全部门店',
      value: '-1'
    }
  ],
  supplier: [
    {
      label: '全部供应商',
      value: '-1'
    }
  ],
  buyer: [
    {
      label: '全部采购员',
      value: '-1'
    }
  ],
  issuer: [
    {
      label: '全部制单人',
      value: '-1'
    }
  ],
  operator: [
    {
      label: '全部操作人',
      value: '-1'
    }
  ],
}
</script>
