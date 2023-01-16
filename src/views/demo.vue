<template>
  <el-button type="primary" @click="dialogFormVisible = true">添加配置</el-button>
  <el-dialog v-model="dialogFormVisible" title="添加配置">
    <el-form :model="form">
      <el-form-item label="映射汉字" :label-width="formLabelWidth">
        <el-input v-model="form.pageOption" :rows="12" type="textarea" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="handleClickCreate">确定</el-button>
      </span>
    </template>
  </el-dialog>
  <MixctMain :pageOption="pageOption" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MixctMain from '@/components/MixctMain.vue'
import { getList } from '@/api/index'
const dialogFormVisible = ref(false)
const formLabelWidth = '120px'
const form = ref({
  pageOption: ''
})
const pageOption = ref({
  search: {
    hidden: true,
    items: [
      {
        name: 'MixctDatePicker',
        theme: 'picker'
      },
      {
        name: 'MixctSelect',
        theme: 'shop'
      },
      {
        name: 'MixctSelect',
        theme: 'supplier'
      },
      {
        name: 'MixctSelect',
        theme: 'buyer'
      },
      {
        name: 'MixctSelect',
        theme: 'issuer'
      },
      {
        name: 'MixctSelect',
        theme: 'operator'
      }
    ]
  },
  table: {
    hidden: true,
    api: getList(),
    columns: [
      {
        prop: 'date',
        label: '日期',
        width: '150'
      },
      {
        prop: 'name',
        label: '名字',
        width: '120'
      },
      {
        prop: 'state',
        label: '状态',
        width: '120'
      },
      {
        prop: 'city',
        label: '城市',
        width: '120'
      },
      {
        prop: 'address',
        label: '地址'
      },
      {
        prop: 'zip',
        label: '城市编码',
        width: '120'
      }
    ]
  },
  pagination: {
    hidden: true
  }
})

const handleClickCreate = () => {
  const option = JSON.parse(form.value.pageOption)
  pageOption.value = option
  pageOption.value.table.api = getList()
  dialogFormVisible.value = false
}
</script>

<style scoped></style>
