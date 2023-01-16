<template>
  <el-date-picker
    v-model="props.modelValue"
    type="daterange"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    range-separator="至"
  />
</template>

<script lang="ts" setup>
const props = defineProps(['modelValue', 'theme'])
</script>
<style scoped></style>
