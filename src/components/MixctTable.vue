<template>
  <div class="mixct-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="column in props.pageOption.table.columns"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
      />
    </el-table>
    <el-pagination
      v-show="!props.pageOption.pagination.hidden"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="->, total, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const tableData: any = ref([])
const currentPage = ref(4)
const pageSize = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const props = defineProps(['pageOption'])

onMounted(async () => {
  const res = await props.pageOption.table.api
  tableData.value = res
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.mixct-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-pagination {
  width: 100%;
  text-align: right;
}
</style>
