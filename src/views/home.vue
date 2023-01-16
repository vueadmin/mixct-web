<template>
  <div class="container">
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-switch v-model="isSearch" inactive-text="搜索框" @change="onChangeSearch" />
        </el-row>

        <el-row>
          <el-checkbox-group v-model="checkSearchList" v-show="isSearch" @change="onChangeCheck">
            <el-checkbox v-for="item in searchItems" :key="item.label" :label="item">{{ item.label }}</el-checkbox>
          </el-checkbox-group>
        </el-row>

        <el-row>
          <el-col :span="4">
            <el-switch v-model="isTable" inactive-text="表格" @change="onChangeTable" />
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="onClickCreate">新增字段</el-button>
          </el-col>
          <el-table :data="tableData" v-show="isTable">
            <el-table-column prop="label" label="映射汉字" width="180" />
            <el-table-column prop="prop" label="字段名" width="180" />
            <el-table-column prop="width" label="宽度" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default="scope">
                <el-button link type="primary" size="small" @click.prevent="onClickRemove(scope.$index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-row>

        <el-row> <el-switch v-model="isPagination" inactive-text="分页" @change="onChangePagination" /> </el-row
      ></el-col>
      <el-col :span="12">
        <el-button type="primary" @click="handleClickCopy">一键复制</el-button>
        <div class="container-josn">
          <pre>{{ JSON.stringify(pageOption, null, '  ') }}</pre>
        </div>
      </el-col>
    </el-row>
    <el-dialog v-model="dialogFormVisible" title="新增字段显示">
      <el-form :model="form">
        <el-form-item label="映射汉字" :label-width="formLabelWidth">
          <el-input v-model="form.label" autocomplete="off" />
        </el-form-item>
        <el-form-item label="字段名" :label-width="formLabelWidth">
          <el-input v-model="form.prop" autocomplete="off" />
        </el-form-item>
        <el-form-item label="宽度" :label-width="formLabelWidth">
          <el-input v-model="form.width" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClickCreate">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isSearch = ref(true)
const isTable = ref(true)
const isPagination = ref(true)
const checkSearchList = ref([])
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = ref({
  label: '',
  prop: '',
  width: ''
})

let searchItems = [
  {
    label: '日期',
    name: 'MixctDatePicker',
    theme: 'picker'
  },
  {
    label: '门店',
    name: 'MixctSelect',
    theme: 'shop'
  },
  {
    label: '供应商',
    name: 'MixctSelect',
    theme: 'supplier'
  },
  {
    label: '采购员',
    name: 'MixctSelect',
    theme: 'buyer'
  },
  {
    label: '制单人',
    name: 'MixctSelect',
    theme: 'issuer'
  },
  {
    label: '操作人',
    name: 'MixctSelect',
    theme: 'operator'
  }
]

const tableData: any = ref([
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
])

const pageOption = ref({
  search: {
    hidden: !isSearch.value,
    items: []
  },
  table: {
    hidden: !isTable.value,
    api: null,
    columns: tableData.value
  },
  pagination: {
    hidden: !isPagination.value
  }
})

const onChangeSearch = (e: boolean | number | string) => {
  if (e) {
    pageOption.value.search.hidden = false
  } else {
    pageOption.value.search.hidden = true
    pageOption.value.search.items = []
    checkSearchList.value = []
  }
}

const onChangeCheck = () => {
  pageOption.value.search.items = checkSearchList.value
}

const onChangeTable = (e: boolean | number | string) => {
  if (e) {
    pageOption.value.table.hidden = false
  } else {
    pageOption.value.table.hidden = true
  }
}

const onChangePagination = (e: boolean | number | string) => {
  if (e) {
    pageOption.value.pagination.hidden = false
  } else {
    pageOption.value.pagination.hidden = true
  }
}

const onClickCreate = () => {
  dialogFormVisible.value = true
}

const handleClickCreate = () => {
  tableData.value.push(form.value)
  pageOption.value.table.columns = tableData.value
  form.value = {
    label: '',
    prop: '',
    width: ''
  }
  dialogFormVisible.value = false
}

const onClickRemove = (index: number) => {
  tableData.value.splice(index, 1)
}

const handleClickCopy = () => {
  const option = JSON.stringify(pageOption.value)
  navigator.clipboard.writeText(option)
  console.log(navigator.clipboard.writeText)
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.container-josn {
  max-height: 550px;
  overflow-y: auto;
  background-color: #333;
  color: #fff;
  padding: 20px;
  margin-top: 10px;
}
</style>
